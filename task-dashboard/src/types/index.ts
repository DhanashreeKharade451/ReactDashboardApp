//TaskList Component
export type TaskStatus = 'pending' | 'in-progress' | 'completed';
 
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
   createdAt: string;
}
 
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

//TaskItem Component
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

//TaskFilter Component

export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    Priority?: 'low' | 'medium' | 'high';
  }) => void;
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

export interface UserSettings {
  theme: 'light' | 'dark';
  fontSize: number;
}
 
