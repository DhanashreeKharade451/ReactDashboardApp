import { useState } from "react";
import type { TaskFilterProps, TaskStatus, TaskPriority } from "../../types";

export const TaskFilter = ({ filters, onFilterChange }: TaskFilterProps) => {


  // const[status, setStatus]= useState<string>("all");
  // const[priority, setPriority] = useState<string>("all");

  return (
    //     <div className="flex gap-4 p-4 flex-wrap">
    //   <select
    //     value={filters.status || "all"}
    //     onChange={(e) =>
    //       onFilterChange({
    //         ...filters,
    //         status:
    //           e.target.value === "all"
    //             ? undefined
    //             : (e.target.value as TaskStatus),
    //       })
    //     }
    //     className="p-2 border rounded"
    //   >
    //     <option value="all">All Status</option>
    //     <option value="pending">Pending</option>
    //     <option value="in-progress">In Progress</option>
    //     <option value="completed">Completed</option>
    //   </select>

    //   <select
    //     value={filters.priority || "all"}
    //     onChange={(e) =>
    //       onFilterChange({
    //         ...filters,
    //         priority:
    //           e.target.value === "all"
    //             ? undefined
    //             : (e.target.value as TaskPriority),
    //       })
    //     }
    //     className="p-2 border rounded"
    //   >
    //     <option value="all">All Priority</option>
    //     <option value="high">High</option>
    //     <option value="medium">Medium</option>
    //     <option value="low">Low</option>
    //   </select>

    //   <input
    //     type="text"
    //     placeholder="Search..."
    //     value={filters.search || ""}
    //     onChange={(e) =>
    //       onFilterChange({
    //         ...filters,
    //         search: e.target.value,
    //       })
    //     }
    //     className="p-2 border rounded"
    //   />
    // </div>

    <div className="flex flex-wrap gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
  {/* Status Filter */}
  <div className="flex flex-col w-40">
    <label
      htmlFor="status-filter"
      className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      Status
    </label>
    <select
      id="status-filter"
      value={filters.status || "all"}
      onChange={(e) =>
        onFilterChange({
          ...filters,
          status: e.target.value === "all" ? undefined : (e.target.value as TaskStatus),
        })
      }
      className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="all">All Status</option>
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
  </div>

  {/* Priority Filter */}
  <div className="flex flex-col w-40">
    <label
      htmlFor="priority-filter"
      className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      Priority
    </label>
    <select
      id="priority-filter"
      value={filters.priority || "all"}
      onChange={(e) =>
        onFilterChange({
          ...filters,
          priority: e.target.value === "all" ? undefined : (e.target.value as TaskPriority),
        })
      }
      className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="all">All Priorities</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
  </div>

  {/* Search Input */}
  <div className="flex flex-col flex-1 min-w-[200px]">
    <label
      htmlFor="search-filter"
      className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      Search
    </label>
    <input
      type="text"
      id="search-filter"
      placeholder="Search tasks..."
      value={filters.search || ""}
      onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
      className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>
  );
};
