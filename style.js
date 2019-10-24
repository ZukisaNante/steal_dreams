import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'boxSizing': 'border-box'
  },
  'input[type="text"]': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '4px',
    'resize': 'vertical'
  },
  'select': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '4px',
    'resize': 'vertical'
  },
  'textarea': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '4px',
    'resize': 'vertical'
  },
  'label': {
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }],
    'display': 'inline-block'
  },
  // HIDE SHOW TOGGLE
  'show': {
    'backgroundColor': '#222222',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '4px',
    'cursor': 'pointer',
    'float': 'right',
    'textDecoration': 'none'
  },
  'input[type="submit"]': {
    'backgroundColor': '#222222',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '4px',
    'cursor': 'pointer',
    'float': 'right'
  },
  'input[type="submit"]:hover': {
    'backgroundColor': '#000000'
  },
  'container': {
    'borderRadius': '5px',
    'backgroundColor': '#ffffff',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'col-25': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.25 }],
    'marginTop': [{ 'unit': 'px', 'value': 6 }],
    'screen&&<w600': {
      'width': [{ 'unit': '%H', 'value': 1 }],
      'marginTop': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  'col-75': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.75 }],
    'marginTop': [{ 'unit': 'px', 'value': 6 }]
  },
  // Clear floats after the columns
  'row:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  // Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other
  // header h2
  'nav': {
    'backgroundColor': '#000000',
    'color': '#ffffff'
  },
  // navbar
  'ul': {
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'backgroundColor': '#333'
  },
  'li': {
    'float': 'left',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#bbb' }]
  },
  'li:last-child': {
    'borderRight': [{ 'unit': 'string', 'value': 'none' }]
  },
  'li a': {
    'display': 'block',
    'color': 'white',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 16 }],
    'textDecoration': 'none'
  },
  'li a:hover:not(active)': {
    'backgroundColor': '#111'
  },
  'active': {
    'backgroundColor': '#666666'
  },
  // end navbar
  // responsive navbar
});
