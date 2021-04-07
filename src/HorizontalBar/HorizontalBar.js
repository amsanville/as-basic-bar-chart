import React from 'react';
import './HorizontalBar.css';

/*
HorizontalBar - horizontal bar for a bar graph.

Properties:
* label - the text that will show up on the bar
* onHover - what the bar does when you hover over it
* width - the width of the bar graph
*/

function HorizontalBar(props){
  return (
    <div className="DataVis-graph-horizontal-bar" onMouseOver={props.onHover} style={{width: props.width}}>
      {props.label}
    </div>
  );
}

export default HorizontalBar;
