import React, { Component } from "react";

import QuestionDetails from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import questionData from "../questionData";

class QuestionShowPage extends Component {
  render() {
    return (
      <main>
        <QuestionDetails
          title="What is your favourite color?"
          body="Red, green, blue, magenta etc."
          author={{ full_name: "David Ko" }}
          view_count={100}
          created_at={new Date().toLocaleString()}
        />
        <h2>Answers</h2>
        <AnswerList answers={questionData[0].answers} />
      </main>
    );
  }
}

export default QuestionShowPage;
