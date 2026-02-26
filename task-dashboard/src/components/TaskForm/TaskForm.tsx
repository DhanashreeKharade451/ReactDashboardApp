import React, { useState } from 'react';
import type { TaskFormData } from '../../types';

interface Props {
    onAddTask: (data: TaskFormData) => void;
}


 const TaskForm = ({ onAddTask}: Props) => {
 
    const [formData, setFormData] = useState<TaskFormData>({
        title: "",
  description: "",
  priority: "medium",
  dueDate: ""
    });

    const [errors, setErrors] = useState<{ title?: string }>({});

     const validate = () => {
    const newErrors: { title?: string } = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onAddTask(formData);

    setFormData({
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
    });
  };

    return(
        <form
    onSubmit={handleSubmit}
    className="p-4 border rounded-lg space-y-3 bg-white dark:bg-gray-800"
  >
    <input
      type="text"
      placeholder="Title"
      value={formData.title}
      onChange={(e) =>
        setFormData({ ...formData, title: e.target.value })
      }
      className="w-full p-2 border rounded"
    />

    {errors.title && (
      <p className="text-red-500 text-sm">{errors.title}</p>
    )}

    <textarea
      placeholder="Description"
      value={formData.description}
      onChange={(e) =>
        setFormData({ ...formData, description: e.target.value })
      }
      className="w-full p-2 border rounded"
    />

    <select
      value={formData.priority}
      onChange={(e) =>
        setFormData({
          ...formData,
          priority: e.target.value as any,
        })
      }
      className="w-full p-2 border rounded"
    >
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <input
      type="date"
      value={formData.dueDate}
      onChange={(e) =>
        setFormData({ ...formData, dueDate: e.target.value })
      }
      className="w-full p-2 border rounded"
    />

    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded w-full"
    >
      Add Task
    </button>
  </form>
    );

}

export default TaskForm;