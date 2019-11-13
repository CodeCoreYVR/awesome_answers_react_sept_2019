import React, { Component } from "react";

import QuestionDetails from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import questionData from "../questionData";

class QuestionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the 'Component' class
    // constructor with 'super' passing it props
    super(props);

    this.state = {
      question: questionData[0]
    };
  }
  deleteQuestion() {
    this.setState({
      question: null
    });
  }
  render() {
    console.log("question show page render method");
    if (!this.state.question) {
      return (
        <main>
          <h2>Question doesn't exist</h2>
        </main>
      );
    }
    return (
      <main>
        <QuestionDetails {...this.state.question} />
        <button
          className="ui right floated red small button"
          onClick={() => this.deleteQuestion()}
        >
          Delete
        </button>
        <h2>Answers</h2>
        <AnswerList answers={questionData[0].answers} />
      </main>
    );
  }
}

export default QuestionShowPage;
