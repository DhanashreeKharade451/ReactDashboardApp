import type { TaskListProps } from "../../types";
import TaskItem from "./TaskItem";

//declare TaskList Function
export const TaskList = ({ tasks, onStatusChange, onDelete }: TaskListProps) => {
        
    if(tasks.length === 0){
        return <p className="p-4 text-gray-500">No tasks found.</p>
    }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id}
        task={task}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
         />
      ))}
    </ul>
  );
};

export default TaskList;
