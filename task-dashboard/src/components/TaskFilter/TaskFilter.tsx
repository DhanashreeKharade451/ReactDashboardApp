import { useState } from "react";
import type { TaskFilterProps, TaskStatus, TaskPriority } from "../../types";

export const TaskFilter = ({ filters, onFilterChange }: TaskFilterProps) => {


  // const[status, setStatus]= useState<string>("all");
  // const[priority, setPriority] = useState<string>("all");

  return (
        <div className="flex gap-4 p-4 flex-wrap">
      <select
        value={filters.status || "all"}
        onChange={(e) =>
          onFilterChange({
            ...filters,
            status:
              e.target.value === "all"
                ? undefined
                : (e.target.value as TaskStatus),
          })
        }
        className="p-2 border rounded"
      >
        <option value="all">All Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select
        value={filters.priority || "all"}
        onChange={(e) =>
          onFilterChange({
            ...filters,
            priority:
              e.target.value === "all"
                ? undefined
                : (e.target.value as TaskPriority),
          })
        }
        className="p-2 border rounded"
      >
        <option value="all">All Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <input
        type="text"
        placeholder="Search..."
        value={filters.search || ""}
        onChange={(e) =>
          onFilterChange({
            ...filters,
            search: e.target.value,
          })
        }
        className="p-2 border rounded"
      />
    </div>

    // <div className="flex gap-4 p-4 flex-wrap">

    //   <div>
    //     <label
    //       htmlFor="status-filter"
    //       className="block text-sm font-medium text-gray-700 mb-1"
    //     >
    //       Status
    //     </label>
    //     <select
    //       id="status-filter"
    //       className="bg-white dark:bg-gray-800 px-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    //       value={status}
    //       onChange={(e) => handleStatusChange(e.target.value)}
    //     >
    //       <option value="all">All Status</option>
    //       <option value="pending">Pending</option>
    //       <option value="in-progress">In Progress</option>
    //       <option value="completed">Completed</option>
    //     </select>
    //   </div>
    //   {/* Priority Filter */}

    //   <div>
    //     <label
    //       htmlFor="priority-filter"
    //       className="block text-sm font-medium text-gray-700 mb-1"
    //     >
    //       Priority
    //     </label>
    //     <select
    //       id="priority-filter"
    //       className="bg-white dark:bg-gray-800 px-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    //       value={priority}
    //       onChange={(e) => handlePriorityChange(e.target.value)}
    //     >
    //       <option value="all">All Priorities</option>
    //       <option value="high">High</option>
    //       <option value="medium">Medium</option>
    //       <option value="low">Low</option>
    //     </select>
    //   </div>
    // </div>
  );
};
