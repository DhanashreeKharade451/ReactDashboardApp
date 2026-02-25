import { useState, useEffect } from "react"
import { TaskFilter } from "../TaskFilter/TaskFilter.tsx";
import TaskForm from "../TaskForm/TaskForm.tsx";
import TaskList from "../TaskList/TaskList.tsx";


const Dashboard = () => {
 const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [darkMode, setDarkMode] = useState(false);

 useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (data: FormData) => {
    const newTask: Task = {
      ...data,
      id: crypto.randomUUID(),
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateStatus = (id: string, status: any) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = filterTasks(tasks, filters);

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

        <div className="flex gap-6 flex-col md:flex-row">
          <TaskForm onAddTask={addTask} />
          <div className="flex-1">
            <TaskFilter onFilterChange={setFilters} />
            <TaskList
              tasks={filteredTasks}
              onStatusChange={updateStatus}
              onDelete={deleteTask}
            />
          </div>
        </div>

        <div className="p-4 border rounded">
          <p>Total Tasks: {stats.total}</p>
          <p>Completed: {stats.completed}</p>
        </div>
      </div>
    </div>
 )
 };

 export default Dashboard;