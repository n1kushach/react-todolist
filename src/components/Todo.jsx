import React from "react";
import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";
import { TaskComponent } from "./TaskComponent";
import { ThemeContext } from "../App";
import { useState, useContext } from "react";


export const Todo = ({
  taskName,
  type,
  tasks,
  handleDeleteTask,
  toggleTask,
  handleKeyDown,
  setTaskName,
  handleSubmit,
  setType,
  activeTasks,
  completedTasks,
  clearCompleted,
}) => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className="bg-light">
      <div className="container">
        <div className="upper">
          <h1>TODO</h1>
          <img onClick={() => toggleTheme()} className="theme" src={theme === "light" ? MoonIcon : SunIcon}></img>
        </div>
        <div className="mid">
          <div className="mid-tick"></div>
          <div className="mid-input-div">
            <input
              onKeyDown={(event) => handleKeyDown(event)}
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
              className="mid-input"
              placeholder="Create a new todo..."
            ></input>
            <button onClick={() => handleSubmit()} className="submit-btn">
              Submit
            </button>
          </div>
        </div>
        <div className="bottom">
          {type === "all"
            ? tasks.map((oneTask, index) => {
                return (
                  <TaskComponent
                    handleDelete={handleDeleteTask}
                    completed={oneTask.completed}
                    toggleTask={toggleTask}
                    task={oneTask}
                    key={index}
                  />
                );
              })
            : type === "active"
            ? activeTasks.map((oneTask, index) => {
                return (
                  <TaskComponent
                    handleDelete={handleDeleteTask}
                    completed={oneTask.completed}
                    toggleTask={toggleTask}
                    task={oneTask}
                    key={index}
                  />
                );
              })
            : type === "completed"
            ? completedTasks.map((oneTask, index) => {
                return (
                  <TaskComponent
                    handleDelete={handleDeleteTask}
                    completed={oneTask.completed}
                    toggleTask={toggleTask}
                    task={oneTask}
                    key={index}
                  />
                );
              })
            : "RAGACA"}

          <div className="bottom-div-footer">
            <h6>
              {tasks.length === 0 || 1
                ? `${tasks.length} item left`
                : `${tasks.length} items left`}
            </h6>
            <div className="bottom-div-footer-subdiv">
              <h1
                onClick={() => setType("all")}
                className={type === "all" ? "footer footerselected" : "footer"}
              >
                All
              </h1>
              <h1
                onClick={() => setType("active")}
                className={
                  type === "active" ? "footer footerselected" : "footer"
                }
              >
                Active
              </h1>
              <h1
                onClick={() => setType("completed")}
                className={
                  type === "completed" ? "footer footerselected" : "footer"
                }
              >
                Completed
              </h1>
            </div>
            <h6 onClick={() => clearCompleted()}>Clear completed</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
