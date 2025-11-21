import React, { useState } from "react";
import CreateTask from "../components/CreateTask";
import ListTask from "../components/ListTask";

const TodoList = () => {
  const dataFromLocalstorage = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(dataFromLocalstorage || []);

  return (
    <div>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <ListTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TodoList;
