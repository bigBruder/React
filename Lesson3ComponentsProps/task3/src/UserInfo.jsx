import React from 'react';
import Avatar from './Avatar';
import "./comment.scss";

const UserInfo = (props) => {
    return (
        <>
        <div className="user-info">
    <Avatar 
    avatarUrl={props.user.avatarUrl}
    name={props.user.name}
    />
        <div className="user-info__name">
            {props.user.name}
            </div>
      </div>
      <div className="comment__text">
      {props.text}
      </div>
    <div className="comment__date">
      {formatDate(props.date)}
      </div>
      </>
    )
};

export default UserInfo;