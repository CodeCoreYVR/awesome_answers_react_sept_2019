import React from "react";

import data from "../questionsData";

export class QuestionIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data
    };
  }

  deleteQuestion(id) {
    // To change state in a React component, you must use the
    // 'setState()' method on 'this'. It takes an object that
    // gets merged in the current state at React's convenience.
    // The properties in 'setState()'  replace the same name properties
    // in the current state
    // This happens asynchronously and will eventually trigger an update
    // to the DOM if there's any change
    this.setState({
      questions: this.state.questions.filter(q => q.id !== id)
    });
  }
  render() {
    return (
      <main className="QuestionIndexPage">
        <h2>Questions</h2>
        <div
          className="ui list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {this.state.questions.map(question => (
            <li className="ui segment" key={question.id}>
              <a className="item" href="">
                {question.title}
              </a>
              <button
                className="ui right floated red small button"
                onClick={() => this.deleteQuestion(question.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </div>
      </main>
    );
  }
}
