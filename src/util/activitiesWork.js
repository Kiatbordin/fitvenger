import axios from "axios";

/* For developement */
// const API_URL = "http://localhost:3000";
// const API_URL = "https://fitvenger-backend-project-2scetch8y-kiatbordin.vercel.app";

/* For production */
const API_URL = "https://fitvenger-backend-project.vercel.app";

const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
})

const getUserInfo = () => {
    const userInfo = {
        userId : 1,
        username : 'testusername',
        password : 'testpassword',
        name : 'testname',
        height: 170,
        weight: 70,
        gender: 'M',
        age: 30,
        goal: 'I want to be healthy in one day.',
        img: 'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg'
    };
    return userInfo;
}

// Get Duration of activities per User
const getDuration = (activities, activityType) => {
    
    if ( typeof activities === 'object' && activities.length >= 1 && typeof activityType === 'string') {

        const eachTypeActivities = activities.filter( (activity) => activity.type === activityType );
        let totalDuration = 0;

        eachTypeActivities.forEach( (activity) => {
            if(activity.status==="Done") {
                const startTime = new Date(activity.start);
                const endTime = new Date(activity.end);
                const msecDiff = endTime - startTime;
                let minDiff = (Number(msecDiff) * 1.66666667 * 0.00001); // convert to minutes.
                totalDuration += minDiff;
            }
        });

        return parseInt(totalDuration.toFixed(0))
    } else {
        // console.log("getDuration error: Please check the incoming activities.")
    }

}

const getBMI = (weight,height) => {
    if( weight && height && typeof weight === 'number' && typeof height === 'number'  ) {
        // BMI = weight(kg) / height(meters) ^ 2
        
        const BMI = weight/(height * 0.01)**2;
        return BMI.toFixed(2);
    } else {
        console.log("getBMI error: Please check the incoming weight and height.")
    }
}

const getCal = (activityType,weight,duration) => {
    // This function will return the calories burn using type,weight and total duration of the activity.
    if( activityType && weight && duration && typeof activityType === 'string' && typeof weight === 'number' && typeof duration === 'number' ) {
        // cal = MET * kilogram * ( mins / 60 )
        let MET = 0;
        switch(activityType) {
            case 'running' :
                MET = 7;
                break;
            case 'walking' :
                MET = 3.5;
                break;
            case 'swimming' :
                MET = 6;
                break;
            case 'hiking' :
                MET = 6;
                break;
            case 'bicycling' :
                MET = 8;
                break;
        }
        
        const calories = MET * weight * (duration/60);
        // console.log(`You play ${activityType} for ${duration} mins and burned ${calories}.`);
        return calories;
    } else {
        // console.log("getCal error: Please check the incoming activityType,weight and duration.")
    }
}

export { 
    API_URL,
    getUserInfo,
    getDuration,
    getBMI,
    getCal,
    axiosInstance
 };

