import { useState } from "react";
import type { TaskFilterProps,TaskStatus } from "../../types";


export const TaskFilter =({onFilterChange}: TaskFilterProps)=>{

    const[status, setStatus]= useState<string>("all");
    const[priority, setPriority] = useState<string>("all");

    const handleStatusChange = (value: string) => {
      setStatus(value);

      onFilterChange({
          status: value === "all"? undefined : (value as TaskStatus),
          priority: priority === "all"? undefined: (priority as any),
      });

    };

    const handlePriorityChange = (value: string) => {
          setPriority(value);
          onFilterChange({
            status: status === "all"? undefined : (status as TaskStatus),
            priority: value === "all"? undefined : (value as any),
          })
    }


   


    return(
        <div className="flex gap-4 p-4">
        <div>
          <label
            htmlFor="status-filter"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Status
          </label>
          <select
            id="status-filter"
            className="bg-white dark:bg-gray-800 px-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={status}
            onChange={(e) => handleStatusChange(e.target.value)}
        
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        {/* Priority Filter */}

        <div>
          <label
            htmlFor="priority-filter"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Priority
          </label>
          <select
            id="priority-filter"
            className="bg-white dark:bg-gray-800 px-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={priority}
            onChange={(e) => handlePriorityChange(e.target.value)}
          >
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
    );
};