import React from "react";

import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";

function QuestionShowPage() {
  return (
    <main>
      <QuestionDetails
        title="What is your favourite color?"
        body="Red, green, blue, magenta etc."
        author={{ full_name: "David Ko" }}
        view_count={100}
        created_at={new Date().toLocaleString()}
      />
      <AnswerDetails
        body="Red."
        author={{ full_name: "Gurshant Sandhu" }}
        created_at={new Date().toLocaleString()}
      />
    </main>
  );
}

export default QuestionShowPage;
