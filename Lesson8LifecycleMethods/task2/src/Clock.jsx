import React, { Component } from "react";
import './clock.scss';
import moment from "moment";

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

// const formatDate = offsetData => moment(getTimeWithOffset(offsetData)).format('LTS')

    class Clock extends Component{
        constructor(props){
            super(props);
        this.state = {
           location: props.location,
           time: moment(getTimeWithOffset(props.offset)).format('LTS')
          };
        //   const time = moment(getTimeWithOffset(props.offset)).format('LTS');
        //   console.log(time);
          setInterval(()=>{
            this.setState({
                time: moment(getTimeWithOffset(props.offset)).format('LTS')
            });
          },1000)
        }
        render() {
            return (
                <div className="clock">
                <div className="clock__location">{this.state.location}</div>
                <div className="clock__time">{this.state.time}</div>
                </div>
            );
        }
    }

    export default Clock;