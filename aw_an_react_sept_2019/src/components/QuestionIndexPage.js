import React from "react";

import data from "../questionData";

export function QuestionIndexPage(props) {
  return (
    <main className="QuestionIndexPage">
      <h2>Questions</h2>
      <ul
        style={{
          listStyle: "none",
          paddingLeft: 0
        }}
      >
        {data.map(question => (
          <li key={question.id}>
            <a href="">{question.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
