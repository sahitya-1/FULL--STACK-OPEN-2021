import React from "react";
import ReactDOM from "react-dom";
import Header from "../src/Components/header";
import Total from "../src/Components/total";
import Content from "../src/Components/content";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const { name, parts } = course;

  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


export default App