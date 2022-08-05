import { UserInfo } from "@rsuite/icons";

const getActivities = (userId) => {
    // Request backend for the list of activities from userId.

    // fetch(=> backend(express)); // "GET /activities/userId"

    // Assuming activities below.
    const activities = [
        {
            id: 1,
            topic: "Fighting please!",
            type: "bicycling",
            start: "8/15/2022, 6:00:47 PM",
            end: "8/15/2022, 7:00:47 PM",
            location: "Chatuchak Park",
            status: "Ongoing",
            description: "I want to lose 5kg in 15 days.I want to lose 5kg in 15 days.I want to lose 5kg in 15 days.I want to lose 5kg in 15 days.",
            score: 0
        }, {
            id: 2,
            topic: "Losing 5 KG.!",
            type: "swimming",
            start: "8/12/2022, 8:00:47 AM",
            end: "8/12/2022, 9:00:47 AM",
            location: "Swimming pool",
            status: "Done",
            description: "Go swimming with my best friends.",
            score: 3.5
        }, {
            id: 3,
            topic: "Marathon 10 KM.!",
            type: "running",
            start: "8/9/2022, 3:00:47 PM",
            end: "8/9/2022, 4:00:47 PM",
            location: "Marathon Festival",
            status: "Gaveup",
            description: "First time 10 KM. marathon challenge.",
            score: 0
        }, {
            id: 4,
            topic: "Losing 10 KG.!",
            type: "swimming",
            start: "8/5/2022, 10:00:47 AM",
            end: "8/5/2022, 11:00:47 AM",
            location: "Swimming pool",
            status: "Done",
            description: "Go swimming with my best friends.",
            score: 2
        }, {
            id: 5,
            topic: "Hiking with friends.!",
            type: "hiking",
            start: "8/3/2022, 5:00:47 AM",
            end: "8/3/2022, 5:00:47 PM",
            location: "Fuji",
            status: "Done",
            description: "Go hiking with my best friends.",
            score: 2
        }, {
            id: 6,
            topic: "Walking with friends.!",
            type: "walking",
            start: "8/1/2022, 8:00:47 AM",
            end: "8/1/2022, 9:00:47 PM",
            location: "Chatuchak Park",
            status: "Done",
            description: "Go walking with my best friends.",
            score: 1
        }, {
            id: 7,
            topic: "Swimming with friends.!",
            type: "swimming",
            start: "7/31/2022, 8:00:47 AM",
            end: "7/31/2022, 8:30:47 AM",
            location: "Chatuchak Park",
            status: "Done",
            description: "Go walking with my best friends.",
            score: 3.5
        },{
            id: 8,
            topic: "Bicycling with friends.!",
            type: "swimming",
            start: "7/24/2022, 8:00:47 AM",
            end: "7/24/2022, 2:30:47 PM",
            location: "Chatuchak Park",
            status: "Gaveup",
            description: "Go Bicycling with my best friends.",
            score: 0
        }, {
            id: 9,
            topic: "Losing 8 KG.!",
            type: "swimming",
            start: "8/12/2022, 8:00:47 AM",
            end: "8/12/2022, 9:00:47 AM",
            location: "Swimming pool",
            status: "Ongoing",
            description: "Go swimming with my best friends.",
            score: 0
        }, {
            id: 10,
            topic: "Losing 7 KG.!",
            type: "Hiking",
            start: "8/6/2022, 7:00:00 AM",
            end: "8/6/2022, 10:30:00 AM",
            location: "Fuji",
            status: "Ongoing",
            description: "Go Hiking with my best friends.",
            score: 0
        }
    ];

    return activities;
}

const getUserInfo = () => {
}

// Get Duration of activities per User
const getDuration = (activities, activityType) => {
    
    if ( typeof activities === 'object' && activities.length >= 1 && typeof activityType === 'string') {

        const eachTypeActivities = activities.filter( (activity) => activity.type === activityType );
        // console.log(eachTypeActivities);

        let totalDuration = 0;
        eachTypeActivities.forEach( (activity) => {
            const startTime = new Date(activity.start);
            const endTime = new Date(activity.end);
            // console.log(`startTime:${startTime}`);
            // console.log(`endTime:${endTime}`);

            const msecDiff = endTime - startTime;
            let minDiff = (Number(msecDiff) * 1.66666667 * 0.00001); // convert to minutes.
            // console.log(typeof minDiff);
            totalDuration += minDiff;
        });

        // console.log(parseInt(totalDuration.toFixed(0)));
        return parseInt(totalDuration.toFixed(0))

    } else {
        // console.log("getDuration error: Please check the incoming activities.")
    }

}

export { 
    getDuration,
    getActivities,
 };

