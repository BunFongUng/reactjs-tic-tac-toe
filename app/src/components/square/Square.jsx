import React, { Component } from 'react';

// export default class Square extends Component {
//     render(){
//         return(
//             <button className="square" onClick={() => this.props.onClick()}>{this.props.value}</button>
//         );
//     }
// }

// Functional Components
export default function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}