import React from "react";

import { QuestionIndexPage } from "./QuestionIndexPage";
import QuestionShowPage from "./QuestionShowPage";

// In React application, we create a component that acts
// as the 'root' or the entry point to all of our other
// components. This is the one that should be rendered
// with 'ReactDOM.render()'
function App() {
  return (
    <div className="ui container App">
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  );
}

// module.exports = App;
export default App;
