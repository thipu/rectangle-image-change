import React, { Component } from 'react';

class RectangleShape extends Component {
    state = {
        rect:{
            width:100,
            height:100   
        }
     }

    handleRectSubmit=(e)=>{
        e.preventDefault();
        let rect = Object.assign({}, this.state.rect);   
        rect.width = this.rectWidth.value;                       
        rect.height = this.rectHeight.value;       
        this.setState({rect});
    }
        
     render() { 
        return ( 
            <div>
                <svg style={this.state.rect} >
                    <rect style={this.state.rect} />
                </svg>
                <div className="row">
                    <label>Rectangle: </label>
                    <input type= "text" placeholder="width" ref={(input) => this.rectWidth = input} />
                    <input type= "text" placeholder="Height" ref={(input) => this.rectHeight = input} />
                    <button type="button" onClick={this.handleRectSubmit}>Submit</button>
                </div>
            </div>
         );
    }
}
 
export default RectangleShape;




