import React, { useActionState, useState } from 'react';
import { TaskFormData } from '../../types';

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

    return(
        <form onSubmit={handleSubmit}
        className='p-4 border rounded-lg space-y-3 bg-white dark:bg-gray-800'>

            <input type="text" />

            <textarea name="" id=""/>

        </form>
    );

}