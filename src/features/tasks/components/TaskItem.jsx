import { useState } from 'react';
import { FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi';
import { useNotification } from '../../../hooks/useNotification';
import { isOverdue } from '../../../utils/dateUtils';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskDate, setTaskDate] = useState(task.dueDate);

  const { notifySuccess } = useNotification();
  const taskIsOverdue = isOverdue(task.dueDate);

  const handleSave = () => {
    if (!taskTitle.trim() || !taskDate) {
      return;
    }

    onUpdate({
      ...task,
      title: taskTitle.trim(),
      dueDate: taskDate
    });

    notifySuccess('Task updated successfully');
    setEditing(false);
  };

  return (
    <div className={`task-item ${taskIsOverdue ? 'overdue' : ''}`}>
      <div className="task-content">
        {editing ? (
          <>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </>
        ) : (
          <>
            <span className="task-title">{task.title}</span>
            <span className="task-date">Due: {task.dueDate}</span>
          </>
        )}
      </div>

      <div className="task-actions">
        {editing ? (
          <>
            <button className="btn-success" onClick={handleSave}>
              <FiCheck /> Save
            </button>
            <button
              className="btn-outline"
              onClick={() => setEditing(false)}
            >
              <FiX /> Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="btn-primary"
              onClick={() => setEditing(true)}
            >
              <FiEdit2 /> Edit
            </button>
            <button
              className="btn-danger"
              onClick={() => onDelete(task.id)}
            >
              <FiTrash2 /> Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
