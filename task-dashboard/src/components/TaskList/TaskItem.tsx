import type { Task, TaskItemProps, TaskStatus } from "../../types";
import { formatDate } from "../../utils/taskUtils";

const TaskItem = ({ task, onStatusChange, onDelete }: TaskItemProps) => {
  return (
    <div className="space-y-4 m-2">
      <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-black dark:border-gray-700">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
          </div>
          <div className="flex gap-2">
            {/* Status Change */}
            <select
              className="transition-all duration-300 hover:scale-[1.02]"
              value={task.status}
              onChange={(e) =>
                onStatusChange(task.id, e.target.value as TaskStatus)
              }
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="mt-2 flex gap-4 text-sm">
          <span className="text-green-600">{task.priority}</span>
          <span className="text-gray-500">
            Due:{formatDate(task.dueDate)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
