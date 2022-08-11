import React from "react";
import moment from "moment";

const birthDate = newDate('2001-01-01T11:11:11.819z');

export default function Greeting(props) {
  return (
    <div className="greeting">
    `My name is ${props.firstName} ${props.lastName}. I'm 17 years old`
</div>
  );
}
