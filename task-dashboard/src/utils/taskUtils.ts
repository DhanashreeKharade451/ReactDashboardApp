import { Task, FilterOptions } from "../types";

export const filterTasks = (tasks: Task[], filters: FilterOptions) => {
  return tasks.filter((task) => {
    const matchStatus =
      !filters.status || task.status === filters.status;

    const matchPriority =
      !filters.priority || task.priority === filters.priority;

    const matchSearch =
      !filters.search ||
      task.title.toLowerCase().includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });
};

export const sortTasksByDate = (tasks: Task[]) => {
  return [...tasks].sort(
    (a, b) =>
      new Date(a.dueDate).getTime() -
      new Date(b.dueDate).getTime()
  );
};

export const formatDate = (date: string) =>
  date ? new Date(date).toLocaleDateString() : "No due date";