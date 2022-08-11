import React from "react";
import moment from "moment";

export default function Greeting(props) {
const age = new Date().getFullYear() - moment(props.birthDate).format("YYYY");
  return (
    <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}
</div>
  );
}
