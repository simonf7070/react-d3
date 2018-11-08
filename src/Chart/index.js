import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.createChart = this.createChart.bind(this);
        this.nodeRef = React.createRef();
    }

    componentDidMount() {
        this.createChart();
    }

    componentDidUpdate() {
        this.createChart();
    }

    createChart() {
        const node = this.nodeRef.current;
        const { data, width, height } = this.props;
        const dataMax = max(data);
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, height]);
        const dataCount = data.length;
        const colWidth = width / dataCount;

        select(node)
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect');
        
        select(node)
            .selectAll('rect')
            .data(data)
            .exit()
            .remove();

        select(node)
            .selectAll('rect')
            .data(data)
            .style('fill', '#fe9922')
            .attr('x', (d, i) => i * colWidth)
            .attr('y', d => height - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', colWidth);
    }

    render() {
        const { width, height } = this.props;
        return <svg ref={this.nodeRef} width={width} height={height} />
    }
}
    
export default Chart;