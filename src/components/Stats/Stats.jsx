import React from "react";
import "./Stats.css";

import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { getDuration } from "../../util/activitiesWork";

export function Stats(props) {

    const totalMinsRun = getDuration(props.activities, "running" ) || 0;
    const totalMinsWalk = getDuration(props.activities, "walking" ) || 0;
    const totalMinsSwim = getDuration(props.activities, "swimming" ) || 0;
    const totalMinsHike = getDuration(props.activities, "hiking" ) || 0;
    const totalMinsBike = getDuration(props.activities, "bicycling" ) || 0;
    const totalDuration = totalMinsRun + totalMinsWalk + totalMinsSwim + totalMinsHike + totalMinsBike;

    const data = [
        {name:"Running", value: totalMinsRun, color: '#0088FE'},
        {name:"Walking", value: totalMinsWalk, color: '#00C49F'},
        {name:"Swimming", value: totalMinsSwim, color: '#FFBB28'},
        {name:"Hiking", value: totalMinsHike, color: '#FF8042'},
        {name:"Bicycling", value: totalMinsBike, color: 'purple'}
      ]
    
    const RADIAN = Math.PI / 180;
    // Prepare pie's label rendering function
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
        );
    };

    return (
        <div className="Stats">

            <div className="stats-container">
                <h3>Duration</h3>
                <h4>{totalDuration}</h4>
                <h3>Calories</h3>
                <h4>120 CAL</h4>
            </div>  

            <PieChart width={200} height={200} >
                <Pie className='myPieChart'
                dataKey="value"
                isAnimationActive={true}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                labelLine={false}
                label={renderCustomizedLabel} >

                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                </Pie>

                <Tooltip />
            </PieChart>

            <div className='label-container'>
                <ul>
                {data.map( label => <li key={label.name} style={{color:label.color}}>{label.name}</li> )}
                </ul>
            </div>

        </div>
    );
}