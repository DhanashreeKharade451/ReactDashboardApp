import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SimpleInputForm from "./components/TaskForm/TaskForm.tsx";

import TaskList from "./components/TaskList/TaskList.tsx";

import type { Task, TaskStatus} from "./types";
import { TaskFilter } from "./components/TaskFilter/TaskFilter.tsx";

function App() {
  const [Tasks, setTasks] = useState<Task[]>([

  //const textObject: Task[] = [
    {
      id: "1",
      title: "title1",
      description: "",
      status: "pending",
      priority: "low",
      dueDate: "",
    },
    {
      id: "2",
      title: "title2",
      description: "",
      status: "in-progress",
      priority: "medium",
      dueDate: "",
    },
    {
      id: "3",
      title: "title3",
      description: "asdfgh",
      status: "completed",
      priority: "high",
      dueDate: "",
    },
  ]);

  const [filters,setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high"
  }>({
    
   });

    //Handle status Change
    const handleStatusChange = (taskID: string, newStatus: TaskStatus) => {
      setTasks((prev) =>
      prev.map((task) =>
      task.id === taskID ? {...task, status: newStatus} :task 
    )
  );
};

//Handle Delete
const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
};

//Filtering Logic: 
const filteredTask = Tasks.filter((task) => {
  if (filters.status && task.status !== filters.status) return false;
  if (filters.priority && task.priority !== filters.priority) return false;
  return true;
});


  return (
   
    <div className="space-y-4">
      <TaskFilter onFilterChange={setFilters}/>

      <TaskList 
      tasks={filteredTask}
      onStatusChange={handleStatusChange}
      onDelete={handleDelete}/>

      </div>
    
  
  )

 
}

export default App;
