import React from "react";

import CreatedAtShow from "./CreatedAtShow";

function AnswerDetails(props) {
  return (
    <div>
      <p>
        {props.body} <br />
        By {props.author.full_name} <br />
        <CreatedAtShow created_at={props.created_at} />
      </p>
    </div>
  );
}

export default AnswerDetails;
