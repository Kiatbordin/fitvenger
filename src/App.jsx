import { useState, useEffect, createContext } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login.jsx";
import { Board } from "./pages/Board.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { CreateActivity } from "./pages/CreateActivity.jsx";
import { EditActivity } from "./pages/EditActivity.jsx";
import { Register } from "./pages/Register.jsx"
import { EditProfile } from "./pages/EditProfile.jsx";

import { API_URL,axiosInstance } from "../src/util/activitiesWork.js";

import axios from "axios";

export const DataContext = createContext(null);

function App() {
  const [render, setRender] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  
  /* Get user information from cookies's use Effect */
  useEffect(() => {

    (async () => {
      if( window.location.pathname==="/") {
        return ;
      } 

      try {
        const getUserInfo = await axiosInstance.get(`/user/me`,{
          withCredentials: true
        });
        setUserInfo(getUserInfo.data);
        setIsLogin(true);
      } catch (err) {
        if(err.response && err.response.status===404) {
          return window.Location.href = "/";
        }
        console.log(err.message);
      }

    })();

  }, []);

  const [isLogin, setIsLogin] = useState(false);
  const [myActivities, setMyActivities] = useState([]);

  /* Get user information normal flow */
  useEffect(() => {
    
    (async () => {
      if (userInfo._id) {
        document.body.style.cursor = 'wait';
        const activities = await axiosInstance.get(
          `/user/${userInfo._id}/activities`
        );
        const reId = activities.data.map((activity) => {
          return {
            ...activity,
            id: activity._id,
            start: new Date(activity.start).toISOString(),
            end: new Date(activity.end).toISOString(),
          };
        });
        setMyActivities(reId);
      }
      document.body.style.cursor = 'default';
    })();
  }, [userInfo, render]);

  const handleLogin = (isAllow) => {
    isAllow ? setIsLogin(true) : setIsLogin(false);
  };

  function createActivities(newCard) {
    const addActivity = { ...newCard, status: "Ongoing", score: 0 };
    setMyActivities([addActivity, ...myActivities]);
  }

  const addActivities = (activity) => {
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
      const { id, topic, start, end, location, status, description, score } = editActivity;

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

    } else {
      console.log( `updateActivities: Not found an activity id:${editActivity.id}` );
    }
  };

  const filteringDateActivities = async(from,to) => {
    /* convert start and end date to ISO string before send to backend */
    const fromDate = new Date(from);
    fromDate.setHours(0,0,0,0)
    const fromDateSetStartDay = fromDate.toISOString();
    const toDate = new Date(to);
    toDate.setHours(23,59,59,999);
    const toDateSetEndDay = toDate.toISOString();
    const queryString = `${API_URL}/user/${userInfo._id}/activities?from=${fromDateSetStartDay}&to=${toDateSetEndDay}`;
    try {
      // const response = await axios.get(queryString);
      const response = await axiosInstance.get(`/user/${userInfo._id}/activities?from=${fromDateSetStartDay}&to=${toDateSetEndDay}`);
      /* convert date to local format if the acvities length != 0 */
      if(response.data.length !== 0) {
        response.data.map( activity => {
            activity.id = activity._id;
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
    setUserInfo,
    setMyActivities,
    setIsLogin,
  };

  return (
    <div className="App">
      <DataContext.Provider value={globalContexts}>
        <BrowserRouter>
          <Navbar isLogin={isLogin} />
          <main>
            <Routes>

              <Route
                path="/"
                element={<Login isLogin={isLogin} handleLogin={handleLogin} />}
              ></Route>
              <Route
                path="/home"
                element={<Board userInfo={userInfo} />}
              ></Route>
              <Route exact path="/create" element={<CreateActivity />}></Route>
              <Route path="/edit/:userId/activities/:activityId" element={<EditActivity />}></Route>
              <Route path="/edit/:userId" element={<EditProfile />}></Route>
              <Route exact path="/register" element={<Register />}></Route>

            </Routes>
          </main>
          <Footer isLogin={isLogin} />
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
