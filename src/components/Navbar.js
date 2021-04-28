import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Navbar = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="navbar">
      <h1>Simple to do list</h1>
      <p>You have {tasks.length} tasks to do...</p>
    </div>
  );
};

export default Navbar;
