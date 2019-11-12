import React from "react";

// In React application, we create a component that acts
// as the 'root' or the entry point to all of our other
// components. This is the one that should be rendered
// with 'ReactDOM.render()'
function App() {
  return (
    <div className="ui container App">
      <QuestionShowPage />
    </div>
  );
}

// To structure our application, we will create components
// that simulate the pages of web application. These are
// meant to replace the various pages rendered by the routes
// of our rails server.

function QuestionShowPage() {
  return (
    <main>
      <QuestionDetails
        title="What is your favourite color?"
        body="Red, green, blue, magenta etc."
        author={{ full_name: "David Ko" }}
        view_count={100}
        create_at={new Date().toLocaleString()}
      />
      <AnswerDetails />
    </main>
  );
}

//  A react component is a function that returns a React element.
// React elements are created with the 'React.createElement()' method
// or JSX tags.

// Your React component's names must be in PascalCase. Those
// whose names do not begin with an upper case letter will
// be interpreted as plain HTML tag.

function QuestionDetails(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.body}
        <br />
        By {props.author && props.author.full_name}
      </p>
      <p>
        <small>
          Seen {props.view_count} time(s) - Created at {props.create_at}
        </small>
      </p>
    </div>
  );
}

function AnswerDetails() {
  return (
    <div>
      <p>
        Red. <br />
        By Gurshant <br />
        <small>Answered 2 days ago</small>
      </p>
    </div>
  );
}

// module.exports = App;
export default App;
