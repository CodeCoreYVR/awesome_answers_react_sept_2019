import React from "react";

import data from "../questionData";

export class QuestionIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data
    };
  }
  render() {
    return (
      <main className="QuestionIndexPage">
        <h2>Questions</h2>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {this.state.questions.map(question => (
            <li key={question.id}>
              <a href="">{question.title}</a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
