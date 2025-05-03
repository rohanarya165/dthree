import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [10, 20, 30, 40, 50];

    // Set the dimensions of the SVG
    const width = 500;
    const height = 300;

    // Create the SVG container
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Define the scales for x and y axes
    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))  // Create an index for each bar
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])  // Max value for scaling
      .range([height, 0]);

    // Create the bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i))        // Set x position based on index
      .attr('y', d => yScale(d))             // Set y position based on data value
      .attr('width', xScale.bandwidth())    // Bar width based on scale
      .attr('height', d => height - yScale(d))  // Height based on data
      .attr('fill', 'steelblue');

    // Create the x-axis
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Create the y-axis
    svg.append('g')
      .call(d3.axisLeft(yScale));
  }, []);

  return (
    <div>
      <h2>Bar Chart using D3.js and React</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
