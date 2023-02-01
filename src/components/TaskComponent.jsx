import React from "react";

export const TaskComponent = ({ task, toggleTask, completed, handleDelete}) => {

  return (
    <div className="bottom-div-task">
      <div
        style={{
          background:
            completed == true
              ? "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
              : "none",
        }}
        onClick={() => toggleTask(task.id)}
        className="bottom-tick"
      ></div>
      <div className="bottom-div">
        <h1
          className={completed === true ? "task-completed" : "task-in-progress"}
        >
          {task.taskName}
        </h1>
      </div>
      <button onClick={() => handleDelete(task.id)} className="delete-btn">X</button>
    </div>
  );
};
