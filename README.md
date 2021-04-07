# as-basic-bar-chart

Provides a basic bar chart utility for use in React. See the demo page (https://amsanville.github.io/as-basic-bar-chart/) for examples use.

## Installation
Run:\
    npm install --save as-basic-bar-chart\
And include:\
    import {Graph} from 'as-basic-bar-chart';\
in your React App.

## Use
The graph class automatically creates graphs using flex boxes based on the numerical data you give it. The data should be an Javascript object with keys for labeling the bars and values for the numerical value of the bars. You can then specify which style (vertical or horizontal) with the horizontal property. For a vertical bar graph, a height should be specified and for a horizontal bar graph a width. Finally a title can be added as well. For example, if:
    data = {
        'Label 1': 1,
        'Label 2': 2,
        'Label 3': 3,
    }
Then:
    <Graph
        title='Vertical Bars'
        height='200px'
        data={data}
    />
Produces the first vertical bar graph in the demo. And
    <Graph
        title='Horizontal Bars'
        width='50%'
        data={data}
        horizontal={true}
    />
The second.
