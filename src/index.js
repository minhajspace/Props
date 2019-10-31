import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import Comment from "./commentDetails";
import ApprovalCard from "./approval";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment author="Minhaj" text="Very nice post" time="7:20 PM" />
      </ApprovalCard>
      <Comment
        author="Mirza"
        text="the post is so informative"
        time="8:01 PM"
      />
      <Comment author="Urooj" text="such a nice post " time="7:45 AM" />'
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
