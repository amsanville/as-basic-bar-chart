import React from 'react';
import './VerticalBar.css';

/*
VerticalBar - vertical bar for a bar graph.

Properties:
* label - the text that will show up on the bar
* onHover - what the bar does when you hover over it
* height - the height of the bar graph
*/

function VerticalBar(props){
  return (
    <div className="DataVis-graph-vertical-bar" onMouseOver={props.onHover} style={{height: props.height}}>
      {props.label}
    </div>
  );
}

export default VerticalBar;
