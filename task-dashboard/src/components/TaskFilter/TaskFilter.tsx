import { useState } from "react";
import type { TaskFilterProps,TaskStatus,TaskPriority } from "../../types";


export const TaskFilter =({filters, onFilterChange}: TaskFilterProps)=>{

    const handleChange = (key: string, value: string) => {
         onFilterChange({
      ...filters,
      [key]: value === "all" ? undefined : value,
    });
    }

    // const[status, setStatus]= useState<string>("all");
    // const[priority, setPriority] = useState<string>("all");

    return(
         <div className="grid md:grid-cols-3 gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      
      {/* Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={filters.search || ""}
        onChange={(e) =>
          onFilterChange({ ...filters, search: e.target.value })
        }
        className="px-3 py-2 border rounded w-full dark:bg-gray-700"
      />

      {/* Status */}
      <select
        value={filters.status || "all"}
        onChange={(e) => handleChange("status", e.target.value)}
        className="px-3 py-2 border rounded dark:bg-gray-700"
      >
        <option value="all">All Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {/* Priority */}
      <select
        value={filters.priority || "all"}
        onChange={(e) => handleChange("priority", e.target.value)}
        className="px-3 py-2 border rounded dark:bg-gray-700"
      >
        <option value="all">All Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};