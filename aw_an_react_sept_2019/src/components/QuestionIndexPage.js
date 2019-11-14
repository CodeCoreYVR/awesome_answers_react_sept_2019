import React from "react";
import { Link } from "react-router-dom";

import NewQuestionForm from "./NewQuestionForm";
import { Question } from "../requests";
import Spinner from "./Spinner";

export class QuestionIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initially the list of the questions is empty until
      // we fetch them from server
      questions: [],
      // Initially, before we have fetched the questions
      // from the server, we will display some loading
      // indicator to the user.
      // but, once we have fetched the questions, we will change
      // the isLoading property to 'false'
      // and display the regular list of questions
      isLoading: true
    };

    this.createQuestion = this.createQuestion.bind(this);
  }

  componentDidMount() {
    // When the QuestionIndexPage component is mounted,
    // we will fetch all of the questions from the server
    Question.all().then(questions => {
      // console.log(questions);
      this.setState({
        questions: questions,
        isLoading: false
      });
    });
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
    if (this.state.isLoading) {
      return <Spinner />;
    }
    const { showAll = false } = this.props;
    // const showAll = this.props.showAll || true;
    const filteredQuestion = this.state.questions.filter((q, index) => {
      if (showAll || index < 5) {
        return true;
      }
      return false;
    });
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
          {filteredQuestion.map(question => (
            <li className="ui segment" key={question.id}>
              <Link to={`/questions/${question.id}`} className="item" href="">
                {question.title}
              </Link>
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
