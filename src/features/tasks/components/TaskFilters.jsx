import { isOverdue, isTodayTask } from '../../../utils/dateUtils';

const TaskFilters = ({ tasks, active, onChange }) => {
  const totalTasks = tasks.length;

  const tasksForToday = tasks.filter(task =>
    isTodayTask(task.dueDate)
  ).length;

  const overdueTasks = tasks.filter(task =>
    isOverdue(task.dueDate)
  ).length;

  const upcomingTasks = tasks.filter(task =>
    !isTodayTask(task.dueDate) && !isOverdue(task.dueDate)
  ).length;

  return (
    <div className="filter-bar">
      <button
        className={active === 'ALL' ? 'btn-primary' : 'btn-outline'}
        onClick={() => onChange('ALL')}
      >
        All Tasks ({totalTasks})
      </button>

      <button
        className={active === 'TODAY' ? 'btn-primary' : 'btn-outline'}
        onClick={() => onChange('TODAY')}
      >
        Today ({tasksForToday})
      </button>

      <button
        className={active === 'UPCOMING' ? 'btn-primary' : 'btn-outline'}
        onClick={() => onChange('UPCOMING')}
      >
        Upcoming ({upcomingTasks})
      </button>

      <button
        className={active === 'OVERDUE' ? 'btn-primary' : 'btn-outline'}
        onClick={() => onChange('OVERDUE')}
      >
        Overdue ({overdueTasks})
      </button>
    </div>
  );
};

export default TaskFilters;
