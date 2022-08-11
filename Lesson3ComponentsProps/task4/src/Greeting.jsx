import React from "react";
import moment from "moment";

// const formatDate = birthDate => moment(birthDate, "YYYYMMDD").from();

export default function Greeting(props) {
  return (
    <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName}. I'm ${props.birthDate} years old`}
</div>
  );
}
