import React from 'react';
import { line } from 'd3-shape'; 

const pathGenerator = line();

const Line = ({ data }) => 
    <path d={pathGenerator(data)} />

const LineChart2 = props =>
    <svg width={props.width} height={props.height} strokeWidth="2" stroke="rgb(137, 86, 255)" fill="rgba(137, 86, 255, 0.2)">
        <Line data={props.data} />
    </svg>

export default LineChart2;