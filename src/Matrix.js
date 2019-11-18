import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {
  
  // genRow = (vals) => (
  //   vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  // )

// Arrow functions without {} can only take one function call.  Since we need two lines, add the curly
// brackets so that console.log(vals) can execute;
  genRow = (vals) => (
    // console.log(vals);
    // (vals.map(val => <div className="cell"></div>)) // replace me and render a cell component instead!
    vals.map(val => <Cell value={val} /> )
    // console.log(vals);
    // (vals.map(val => <div className="cell"></div>)) // replace me and render a cell component instead!
  )

  // genMatrix = () => (
  //   this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  // )
  
// Same goes for here.  
  genMatrix = () => (
    // console.log(this.props.values);
    (this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>))
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

// Matrix.defaultProps = {
//   values :
//     ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',
//       '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',
//       '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',
//       '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',
//       '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',
//       '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',
//       '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',
//       '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',
//       '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',
//       '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
// }

Matrix.defaultProps = {
  values: (()=> {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}

