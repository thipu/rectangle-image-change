import React, { Component } from 'react';

class CircleShape extends Component {
    state = {
        circ:{
            cx:50,cy:50,r:40, stroke:"block", strokeWidth:2, fill:"block"
        },
     }

    handleCircSubmit=(e)=>{
        e.preventDefault();
        let circ = Object.assign({}, this.state.circ);    
        circ.cx = this.circWidth.value; 
        circ.cy=this.circHeight.value; 
        circ.r=this.circRadious.value;                   
        this.setState({circ});
    }

     render() { 
        return ( 
            <div>
                 <svg style= {this.state.circ} >
                    <circle style={this.state.circ} />
                </svg>
                <div className="row">
                    <label htmlFor="circle">Circle: </label>
                    <input type= "text" placeholder="width" ref={(input) => this.circWidth = input}/>
                    <input type= "text" placeholder="height" ref={(input) => this.circHeight = input} />
                    <input type= "text" placeholder="radious" ref={(input) => this.circRadious = input} />
                    <button type="submit" onClick={this.handleCircSubmit}>Submit</button>
               </div>
            </div>
         );
    }
}
 
export default CircleShape;

