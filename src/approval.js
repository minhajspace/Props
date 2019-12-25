/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Comment from "./commentDetails";

const ApprovalCard = props => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">{props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic yellow button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
