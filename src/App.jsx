import { useState, useEffect, createContext } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login.jsx";
import { Board } from "./pages/Board.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { CreateActivity } from "./pages/CreateActivity.jsx";
import { EditActivity } from "./pages/EditActivity.jsx";

import { getUserInfo } from "../src/util/activitiesWork.js";

import { API_URL,getActivities } from "../src/util/activitiesWork.js";

import axios from "axios";

export const DataContext = createContext(null);

function App() {
  const [render, setRender] = useState(true);
  // Assume that App received userInfo when login Succesful.
  const [userInfo, setUserInfo] = useState({});
  // useEffect(() => {
  //   const updateUserInfo = {...getUserInfo()};
  //   setUserInfo(updateUserInfo);
  // }, []);
  useEffect(() => {
    (async () => {
      const userInfo = await axios.get(
        `${API_URL}/user/62f4fadbd892c8566e620880`
      );
      setUserInfo(userInfo.data);
    })();
  }, []);

  console.log(userInfo);
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (isAllow) => {
    isAllow ? setIsLogin(true) : setIsLogin(false);
    // alert(isLogin);
  };
  const [myActivities, setMyActivities] = useState([]);
  // useEffect( () => {
  // Once this component rendered, It should request the user's information using userID
  // Then update the activities's state.
  // const userId = 50;  // assumming userId
  //   const updateActivities = [...getActivities(userId)];
  //   setMyActivities(updateActivities);
  // }, []);

  useEffect(() => {
    (async () => {
      if (userInfo._id) {
        const activities = await axios.get(
          `${API_URL}/user/${userInfo._id}/activities`
        );
        // console.log(activities);
        const reId = activities.data.map((activity) => {
          return {
            ...activity,
            id: activity._id,
            start: new Date(activity.start).toLocaleString(),
            end: new Date(activity.end).toLocaleString(),
          };
        });
        setMyActivities(reId);
      }
    })();
  }, [userInfo, render]);
  console.log(myActivities);

  function createActivities(newCard) {
    const addActivity = { ...newCard, status: "Ongoing", score: 0 };
    setMyActivities([addActivity, ...myActivities]);
  }

  const addActivities = (activity) => {
    // Check if we still need this method ?
    // Or we can create new activity on Create activity form and re-render board page ?
    setMyActivities((prev) => [...prev, activity]);
  };

  const deleteActivities = (activity) => {
    setMyActivities(
      myActivities.filter((remainActivity) => remainActivity.id !== activity.id)
    );
  };

  const updateActivities = (editActivity) => {
    const foundIndex = myActivities.findIndex(
      (activity) => activity.id === editActivity.id
    );

    if (foundIndex !== -1) {
      const { id, topic, start, end, location, status, description, score } =
        editActivity;

      setMyActivities(
        [...myActivities].map((activity) => {
          if (activity.id === id) {
            activity.id = id;
            activity.topic = topic;
            activity.start = start;
            activity.end = end;
            activity.location = location;
            activity.status = status;
            activity.description = description;
            activity.score = score;
          }
          return activity;
        })
      );

      console.log("Activities Updated.");
      console.log(myActivities);
    } else {
      console.log(
        `updateActivities: Not found an activity id:${editActivity.id}`
      );
    }
  };

  const filteringDateActivities = async(from,to) => {
    console.log("from: "+from+" to: "+to);

    /* convert start and end date to ISO string before send to backend */
    const fromDate = new Date(from);
    fromDate.setHours(0,0,0,0)
    const fromDateSetStartDay = fromDate.toISOString();
    const toDate = new Date(to);
    toDate.setHours(23,59,59,999);
    const toDateSetEndDay = toDate.toISOString();
    const queryString = `${API_URL}/user/${userInfo._id}/activities?from=${fromDateSetStartDay}&to=${toDateSetEndDay}`;
    console.log(queryString);
    // setMyActivities([...filteredActivities]); 
    try {
      const response = await axios.get(queryString);
      console.log(response.data);
      /* convert date to local format if the acvities length != 0 */
      if(response.data.length !== 0) {
        response.data.map( activity => {
            activity.id = activity._id;
            activity.start = new Date(activity.start).toLocaleString();
            activity.end = new Date(activity.end).toLocaleString();
        });
      }
      setMyActivities([...response.data]); 
    } catch (err) {
      console.log("filteringDateActivities Catch error" + err.message);
    }
  };

  const toggleRender = () => {
    setRender((prev) => !prev);
  };

  const globalContexts = {
    myActivities,
    addActivities,
    deleteActivities,
    updateActivities,
    createActivities,
    filteringDateActivities,
    toggleRender,
    userInfo,
  };

  return (
    <div className="App">
      <DataContext.Provider value={globalContexts}>
        <BrowserRouter>
          <Navbar isLogin={isLogin} />
          <main>
            <Routes>
              <Route
                path="/login"
                element={<Login isLogin={isLogin} handleLogin={handleLogin} />}
              ></Route>
              <Route
                path="/"
                element={<Board isLogin={isLogin} userInfo={userInfo} />}
              ></Route>
              <Route path="/create" element={<CreateActivity />}></Route>
              <Route path="/edit/:id" element={<EditActivity />}></Route>
            </Routes>
          </main>
          <Footer isLogin={isLogin} />
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
