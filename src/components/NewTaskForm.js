import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const NewTaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", task: task });
    setTask("");
  };

  return (
    <div className="form">
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          height: "100%",
          padding: 0,
        }}
      >
        <input
          type="text"
          placeholder="Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <input className="add" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default NewTaskForm;
