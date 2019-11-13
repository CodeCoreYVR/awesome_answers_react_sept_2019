import React from "react";

import NewQuestionForm from "./NewQuestionForm";
import data from "../questionsData";

export class QuestionIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data
    };

    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(params) {
    // update the list of questions within our state
    // by adding a new question to that list
    this.setState(state => {
      return {
        questions: [
          {
            ...params,
            // Remember to include current date
            created_at: new Date(),
            // And since there is no db yet,
            // we need to generate ids for ourselves
            // but this will be done by a db later
            id: Math.max(...state.questions.map(question => question.id)) + 1
          },
          // copy the previous list of questions from our state
          // into this new array, following the newly created question
          ...state.questions
        ]
      };
    });
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
        <NewQuestionForm onSubmit={this.createQuestion} />
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
