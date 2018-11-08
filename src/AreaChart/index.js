import React from 'react';
import { area } from 'd3-shape'; 

const pathGenerator = area();

const Area = ({ data }) => 
    <path d={pathGenerator(data)} />

const AreaChart = props =>
    <svg width={props.width} height={props.height} strokeWidth="2" stroke="rgb(137, 86, 255)" fill="rgba(137, 86, 255, 0.2)">
        <Area data={props.data} />
    </svg>

export default AreaChart;