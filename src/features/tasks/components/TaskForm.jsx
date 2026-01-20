import { useState } from 'react';
import { useNotification } from '../../../hooks/useNotification';

const TaskForm = ({ onAdd }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const { notifySuccess } = useNotification();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!taskTitle.trim() || !taskDate) {
      return;
    }

    onAdd(taskTitle.trim(), taskDate);
    notifySuccess('Task added successfully');

    setTaskTitle('');
    setTaskDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <input
        type="date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />

      <button type="submit" className="btn-primary">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
