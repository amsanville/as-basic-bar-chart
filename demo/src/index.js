import React, {Component} from 'react'
import {render} from 'react-dom'

import Graph from '../../src/Graph/Graph.js';
import './index.css'

function App() {
  // Some made up test data
  let data1 = {
    'Label 1': 1,
    'Label 2': 2,
    'Label 3': 3,
  }

  let data2 = {
    'Text for bar' : 100,
    'Some more text': 1000,
    'Even more...': 10000,
  }

  return (
    <div>
      <p>An example of using vertical bars. Note, a height must be specified, otherwise it will default to a height based on the text labels on the bars.</p> 
      <Graph
        title='Vertical Bars'
        height='200px'
        data={data1}
      />
      <p>An example using horizontal bars with the same data as above. Note, a width must be specified otherwise the bars will expand to the full width of the screen.</p>
      <Graph
        title='Horizontal Bars'
        width='50%'
        data={data1}
        horizontal={true}
      />
      <p>Another vertical graph, this time with exponential data. A minimum height is specified in the CSS that can be adjusted to better suit your needs (Set the minimum height in the <strong>DataVis-graph-vertical-bar</strong> class, see HorizontalBar.css). In this case, 1000 is 10% of 10000, so it and the bar representing 100 are the same size. Observer the thickness of the bar adjusts based on the text.</p>
      <Graph
        title='Vertical Bars - Exponential'
        height='200px'
        data={data2}
      />
      <p>Same as above, except the minimum width should be set in the <strong>DataVis-graph-horizontal-bar</strong> class. See VerticalBar.css. Observe, the thickness adjusts based on the text.</p>
      <Graph
        title='Horizontal Bars - Exponential'
        width='50%'
        data={data2}
        horizontal={true}
      />
      <p>Finally, the color scheme is set for the demo in index.css. To make your own color scheme overwrite the following variables:
        <ul>
          <li>--color-bar-highlight - used for the shadow</li>
          <li>--color-bar-primary - used for the bars alternating colors</li>
          <li>--color-bar-secondary - used for the bars alternating colors</li>
        </ul>
      Overwriting those variables in CSS will change the color scheme. Note, the background color for the whole demo is specified externally.
      </p>
    </div>
  );
}

render(<App/>, document.querySelector('#demo'));
