import React from "react";
import moment from "moment";

export default function Greeting(props) {
  return (
    <div className="greeting">
    `My name is ${props.firstName} ${props.lastName}. I'm 17 years old`
</div>
  );
}
