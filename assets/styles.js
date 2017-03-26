import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'font': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': '"Century' }, { 'unit': 'string', 'value': 'Gothic",' }, { 'unit': 'string', 'value': 'Futura,' }, { 'unit': 'string', 'value': 'sans-serif' }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'ol': {
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'ul': {
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'board-row:after': {
    'clear': 'both',
    'content': '""',
    'display': 'table'
  },
  'status': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'square': {
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#999' }],
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'fontWeight': 'bold',
    'lineHeight': [{ 'unit': 'px', 'value': 34 }],
    'height': [{ 'unit': 'px', 'value': 34 }],
    'marginRight': [{ 'unit': 'px', 'value': -1 }],
    'marginTop': [{ 'unit': 'px', 'value': -1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 34 }]
  },
  'square:focus': {
    'outline': 'none'
  },
  'kbd-navigation square:focus': {
    'background': '#ddd'
  },
  'game': {
    'display': 'flex',
    'flexDirection': 'row'
  },
  'game-info': {
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  }
});
