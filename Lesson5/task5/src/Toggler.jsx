import React, { Component } from 'react';
import './index.scss';

class Toggler extends Component {

//   constructor(props){
//    super(props)
//    this.state ={ 
//    text: e.target.textContent++
//   };
//   }
// handleClick = (e)=>{
//   this.setState({
//    text: e.target.textContent = this.state.text
//   })
//   }
handleClick = (e) =>{
   e.target.textContent==='Off'
   ?
   e.target.textContent='On'
   :
   e.target.textContent='Off'

}
    render(){
    return (  
<div onClick={this.handleClick} className="toggler">Off</div>

);
}
}

export default Toggler;