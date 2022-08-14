import React, { Component } from 'react';
import './index.scss';


const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
   setBodyColor = color => {
    document.body.style.backroundColor = color;
   }
    render(){
    return ( 
       <div className='colors'> 
<button style={{backgroundColor: RED,}} 
onClick={this.setBodyColor.bind(this, RED)}
className='colors__button'/>
<button style={{backgroundColor: GREEN,}} 
onClick={() => this.setBodyColor.bind(this, GREEN)}
className='colors__button'/>
<button style={{backgroundColor: BLUE,}} 
onClick={() => this.setBodyColor.bind(this, BLUE)}
className='colors__button'/>
</div>
);
}
}

export default Colors;