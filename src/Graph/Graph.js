import React, { useState } from 'react';
import './Graph.css';
import HorizontalBar from '../HorizontalBar/HorizontalBar.js';
import VerticalBar from '../VerticalBar/VerticalBar.js';

/*
Graph - makes a graph based on the the data and setting fed to the graph.

Currently can make vertical or horizontal bar graphs, expects all numerical data to be greater than 0.

Properties:
* data - an object containing the data to be graphed, uses the keys as labels and the   values for the numeric data.
* horizontal - if true, makes a horizontal bar graph instead (default is vertical). 
* width - the width of the graph - default value is 100%
* height - the height of the graph - default value is based on text size
*/

function Graph(props){
  // Display Value
  // Value displayed in the corner of the graph, changes based on hover
  const [displayValue, setDisplayValue] = useState('');

  function hoverBar(key, val){
    setDisplayValue(key + ': ' + val);
  }

  // Pre-process the data in order to make a graph
  // Make a copy of the data for processing
  let dataProcessed = JSON.parse(JSON.stringify(props.data));
  // Find the largest value
  let max = 0;
  for(const [key, value] of Object.entries(dataProcessed)){
    if(max < value){
      max = value;
    }
  }

  // Normalize
  for(const [key, value] of Object.entries(dataProcessed)){
    dataProcessed[key] = value / max * 100;
  }

  console.log(Object.keys(dataProcessed));
  return (
    <div>
      <div className='DataVis-graph-title'>
        <h2>{props.title}</h2>
        <h4>{displayValue}&zwnj;</h4>
      </div>
      <div className={(props.horizontal) ? ("DataVis-graph-horizontal") : ("DataVis-graph-vertical")} style={{height: props.height, width: props.width}}>
        {
          Object.keys(dataProcessed).map(
            (keyVal) => {
              return props.horizontal ? (
                <HorizontalBar
                  label={keyVal}
                  width={dataProcessed[keyVal].toString() + '%'}
                  onHover={()=>hoverBar(keyVal, props.data[keyVal])}
                />) : (
                <VerticalBar
                  label={keyVal}
                  height={dataProcessed[keyVal].toString() + '%'}
                  onHover={()=>hoverBar(keyVal, props.data[keyVal])}
                />
                )})
        }
      </div>
    </div>
  );
}

export default Graph;
