import React from "react";
import moment from "moment";

export default function Profile(props) {
  const data = props.birthDate;
  const formatDate = data => moment(data).format("DD MMM YY");
  return (
    <>
    <div className="profile__name">
    `${props.firstName} ${props.lastName}`
</div>
    <div className="profile__birth">
    `Was born ${formatDate} in ${props.birthPlace}`
</div>
</>
  );
}