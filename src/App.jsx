import { ToastContainer } from 'react-toastify';
import { useTasks } from './features/tasks/hooks/useTasks';
import TaskForm from './features/tasks/components/TaskForm';
import TaskList from './features/tasks/components/TaskList';
import TaskFilters from './features/tasks/components/TaskFilters';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { tasks, addTask, deleteTask, updateTask, filter, setFilter } = useTasks();

  return (
    <div className="app-container">
      <ToastContainer />
      <h1>ActionHub</h1>

      <TaskForm onAdd={addTask} />
      
      <TaskFilters
        tasks={tasks}
        active={filter}
        onChange={setFilter}
      />


      <TaskList
        tasks={tasks}
        filter={filter}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />
    </div>
  );
};

export default App;
