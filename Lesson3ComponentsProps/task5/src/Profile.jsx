import React from "react";
import moment from "moment";

export default function Profile(props) {

  const formatDate = birthDate => moment(birthDate).format("DD MMM YY");
  return (
    <>
    <div className="profile__name">
    `${props.firstName} ${props.lastName}`
</div>
    <div className="profile__birth">
    `Was born ${formatDate(props.birthDate)} in ${props.birthPlace}`
</div>
</>
  );
}