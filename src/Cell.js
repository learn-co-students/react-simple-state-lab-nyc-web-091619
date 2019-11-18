import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    //create a clickhandler which updates with .setState to the hex value
    handleClick = ()=> {
        this.setState({
            color: '#333'
        })
    }


    //set the background color in div - adding following attributes 
    render(){
        return (
        <div 
            className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>

        </div>
        )
    }
}


// {/* <Cell />
// ✓ is a correctly defined and exported React component which renders a <div> with a className of 'cell'
// ✓ has a state key of 'color'
// ✓ state.color is initially set to the 'value' prop passed from Matrix
// ✓ has an event listener for clicks on the <div> (don't forget: 'onClick' in React!)
// ✓ has an event listener that, when clicked, calls this.setState() once (make sure you aren't setting state directly, but instead using the component's 'setState' method)
// ✓ has an event listener that, when clicked, sets state's 'color' key to a value of '#333'
// ✓ sets the <div>'s inline style attribute to 'style={{backgroundColor: this.state.color}}' */}