import React from "react";
import faker from "faker";
import { ok } from "assert";

const Comment = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" scr={props.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="data">{props.time} </span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default Comment;
