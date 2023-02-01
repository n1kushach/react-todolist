import "./App.css";
import MoonIcon from "./assets/icon-moon.svg";
import { TaskComponent } from "./components/TaskComponent";
import { useState, createContext } from "react";
import Todo from "./components/Todo";

export const ThemeContext = createContext(null);

function App() {

  // Theme
  const [theme, setTheme] = useState("light");

  // Initial state for todo-app tasks
  const [tasks, setTasks] = useState([
    { id: 0, taskName: "Complete online JavaScript course", completed: false },
  ]);

  // check the type of tasks to be displayed (e.g All / Active / Completed)
  const [type, setType] = useState("all");

  // Works
  const activeTasks = tasks.filter((task) => task.completed == false);
  const completedTasks = tasks.filter((task) => task.completed == true);

  // Getting username from input HTML tag
  const [taskName, setTaskName] = useState("");

  // Submitting task, if taskName from input is empty, alert user
  const handleSubmit = () => {
    if (taskName === "") {
      alert("Please enter task name");
    } else {
      const newTask = {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        taskName: taskName,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskName("");
    }
  };

  //Toggling to check/uncheck task (changes bg-color)
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      })
    );
  };

  // Deleting task based on id
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clearing all completed tasks in app
  const clearCompleted = () => {
    const completedTasks = tasks.filter((task) => task.completed == true);
    if (completedTasks.length == 0) {
      alert("No completed tasks to clear");
    } else {
      setTasks(tasks.filter((task) => task.completed !== true));
      setType("all");
    }
  };

  // Extra feature: pressing enter submits task
  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      handleSubmit();
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme((curr) => curr === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Todo
          taskName={taskName}
          type={type}
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          toggleTask={toggleTask}
          handleKeyDown={handleKeyDown}
          setTaskName={setTaskName}
          handleSubmit={handleSubmit}
          setType={setType}
          activeTasks={activeTasks}
          completedTasks={completedTasks}
          clearCompleted={clearCompleted}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
