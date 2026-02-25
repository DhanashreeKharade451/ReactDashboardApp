//TaskList Component
export type TaskStatus = "pending" | "in-progress" | "completed";
export type TaskPriority = "low" | "medium" | "high";

 
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
   createdAt: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  priority: TaskPriority ;
  dueDate: string;
}
 
export interface FilterOptions {
  status?: TaskStatus;
  priority?: TaskPriority;
  search?: string;
}


export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
}

//TaskItem Component
export interface TaskItemProps extends TaskListProps {
  task: Task;
}

//TaskFilter Component

export interface TaskFilterProps  {
   filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}




