import { useState, useEffect } from "react"
import { TaskFilter } from "../TaskFilter/TaskFilter.tsx";
import TaskForm from "../TaskForm/TaskForm.tsx";
import TaskList from "../TaskList/TaskList.tsx";
import { filterTasks,sortTasksByDate } from "../../utils/taskUtils.ts";
import type { Task, TaskFormData, FilterOptions, TaskStatus } 
from "../../types";


const Dashboard = () => {
 const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [darkMode, setDarkMode] = useState(false);

  // Load from localStorage
 useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

   // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (data: TaskFormData) => {
    const newTask: Task = {
      ...data,
      id: crypto.randomUUID(),
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateStatus = (id: string, status: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  
  const processedTasks  = sortTasksByDate(
    filterTasks(tasks, filters)
  );

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "completed").length,
  };


 return(
     <div className={darkMode ? "dark bg-gray-900 text-white" : ""}>
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Task Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded"
          >
            Toggle Theme
          </button>
        </div>

        <TaskForm onAddTask={addTask} />

        <TaskFilter
          filters={filters}
          onFilterChange={setFilters}
        />

        <TaskList
          tasks={processedTasks}
          onStatusChange={updateStatus}
          onDelete={deleteTask}
        />

        <div className="p-4 border rounded">
          <p>Total: {stats.total}</p>
          <p>Completed: {stats.completed}</p>
        </div>
      </div>
    </div>
 )
 };

 export default Dashboard;