import React from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

const Bars = ({ width, height, data }) => {
    const dataMax = max(data);
    const yScale = scaleLinear()
        .domain([0, dataMax])
        .range([0, height]);
    const dataCount = data.length;
    const colWidth = width / dataCount;

    return data.map((data, index) => 
        <Bar 
            key={index}
            x={index * colWidth} 
            y={height - yScale(data)}
            height={yScale(data)} 
            width={colWidth}
        />
    );
};

const Bar = props => <rect {...props} style={{'fill': '#aa9922'}} />

const BarChart = props =>
    <svg width={props.width} height={props.height}>
        <Bars {...props} />
    </svg>

export default BarChart;