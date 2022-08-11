import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.scss";
import "./comment.scss";
import Comment from "./Comment";

const rootElement = document.querySelector("#root");

const userInfo = {
    user:{name: 'Tom',
    avatarUrl: 'https://avatars1.githubusercontent.com'
}
};
ReactDOM.render(
<Comment
    author = {userInfo}
    text="Good Job!"
    date={new Date('2019-01-01T11:32:19.566Z')}
    />, 
    rootElement);
