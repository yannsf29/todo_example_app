import React from "react";
import Header from "./Header";
import ToDoCard from "./components/ToDoCard";

export default function App() {
  return (
    <>
      <Header />

      <div className="w-screen flex items-center justify-center p-4">
        <div className="border-2 w-3/4 flex">
          <div className="w-1/3 m-4 ">
            <ToDoCard content="column 1" />
            <ToDoCard content="column 1" />
            <ToDoCard content="column 1" />
            <ToDoCard content="column 1" />
          </div>
          <div className="w-1/3 m-4 ">
            <ToDoCard content="column 2" />
            <ToDoCard content="column 2" />
            <ToDoCard content="column 2" />
            <ToDoCard content="column 2" />
          </div>
          <div className="w-1/3 m-4 ">
            <ToDoCard content="column 3" />
            <ToDoCard content="column 3" />
            <ToDoCard content="column 3" />
            <ToDoCard content="column 3" />
          </div>
        </div>
      </div>
    </>
  );
}
