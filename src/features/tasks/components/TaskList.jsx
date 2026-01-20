import TaskItem from './TaskItem';
import { isOverdue, isTodayTask } from '../../../utils/dateUtils';

const TaskList = ({ tasks, filter, onDelete, onUpdate }) => {
  const visibleTasks = tasks
    .filter(task => {
      if (filter === 'TODAY') {
        return isTodayTask(task.dueDate);
      }

      if (filter === 'OVERDUE') {
        return isOverdue(task.dueDate);
      }

      if (filter === 'UPCOMING') {
        return !isOverdue(task.dueDate) && !isTodayTask(task.dueDate);
      }

      return true;
    })
    .sort((firstTask, secondTask) => {
      return new Date(firstTask.dueDate) - new Date(secondTask.dueDate);
    });

  if (!visibleTasks.length) {
    return <p>No tasks found</p>;
  }

  return (
    <>
      {visibleTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};

export default TaskList;
