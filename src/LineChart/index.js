import React from 'react';
import { line } from 'd3-shape'; 
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

let yScale;

const pathGenerator = line()
    .x(d => d.x)
    .y(d => yScale(d.y));

const Line = ({ data }) => 
    <path d={pathGenerator(data)} />

const LineChart = props => {
    const dataMax = max(props.data, d => d.y);

    yScale = scaleLinear()
        .domain([0, dataMax])
        .range([props.height, 0]);

    return <svg width={props.width} height={props.height} strokeWidth="2" stroke="rgb(137, 86, 255)" fill="rgba(137, 86, 255, 0.2)">
            <Line data={props.data} />
        </svg>
}

export default LineChart;