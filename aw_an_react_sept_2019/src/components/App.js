import React from "react";

import { QuestionIndexPage } from "./QuestionIndexPage";
import QuestionShowPage from "./QuestionShowPage";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";

// In React application, we create a component that acts
// as the 'root' or the entry point to all of our other
// components. This is the one that should be rendered
// with 'ReactDOM.render()'
function App() {
  return (
    // We need to wrap all component that are imported from
    // 'react-router-dom' inside of a 'Router' component
    // in this case, we are using 'BrowerRouter'
    // What this does, is allow all descendants of the
    // 'BrowserRouter' to use any and all components that
    // come with 'react-router-dom'
    <BrowserRouter>
      <div className="ui container App">
        <NavBar />
        {/* 
          The Route component has many props it uses
          to determine which component to render and when 
          to render that component.

          - path: when the path prop matches the path in the url, 
            the component given to the component prop will be displayed
          - component: this prop is used to tell the Route which component
            should be rendered when the path matches the url
          - exact: the exact prop requires the path to exactly mathch
            the url as opposed to the default behaviour of a Route which 
            is to match the beginning of the url 
        */}
        <Route path="/questions" exact component={QuestionIndexPage} />
        <Route path="/questions/:id" component={QuestionShowPage} />
      </div>
    </BrowserRouter>
  );
}

// module.exports = App;
export default App;
