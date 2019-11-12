import React from "react";

import CreatedAtShow from "./CreatedAtShow";

function AnswerDetails(props) {
  /*
      Using the 'style' property on a base HTML component
      will modify in the style attribute (inline styles.)
     */
  return (
    <div
      style={{
        color: "white",
        fontStyle: "italic",
        backgroundColor: "teal"
      }}
    >
      <p>
        {props.body} <br />
        By {props.author.full_name} <br />
        <CreatedAtShow created_at={props.created_at} />
      </p>
    </div>
  );
}

export default AnswerDetails;
