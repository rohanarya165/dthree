import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3CircleExample = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [10, 20, 30];

    const svg = d3.select(svgRef.current)
      .attr('width', 200)
      .attr('height', 100);

    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => (i + 1) * 50)
      .attr('cy', 50)
      .attr('r', d => d)
      .attr('fill', 'steelblue');
  }, []);

  return (
    <div>
      <h2>D3 Circles in React</h2>
      <svg ref={svgRef} viewBox="0 0 200 100" width="100%" height="auto" />
    </div>
  );
};

export default D3CircleExample;
