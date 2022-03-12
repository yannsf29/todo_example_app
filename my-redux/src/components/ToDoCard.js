import React from "react";
import { TasksList } from '../features/tasks/tasksList'

const ToDoCard = ({ content }) => {
  if (content === "column 1") {
    content = "Hello";
  } else {
    content = "Goodbye";
  }
  return (
    <div className="flex flex-col border-2 w-full h-72 shadow-xl rounded-sm m-4">
      <div className="flex font-bold m-4 text-lg">Shopping Trends</div>
      <div className="flex text-lg w-full h-full justify-center items-center ">
        <TasksList />
      </div>
    </div>
  );
};

export default ToDoCard;
