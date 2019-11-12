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
      <QuestionDetails />
      <AnswerDetails />
    </main>
  );
}

// module.exports = App;
export default App;
