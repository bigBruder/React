import React from "react";
import moment from "moment";

export default function Greeting(props) {
  const formatDate = birthDate => moment(birthDate).format("YYYY");
const age = new Date().getFullYear() - formatDate(props.birthDate);
  return (
    <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}
</div>
  );
}
