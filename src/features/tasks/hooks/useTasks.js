import { useEffect, useReducer, useState } from 'react';
import { taskService } from '../services/taskService';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter(t => t.id !== action.payload);
    case 'UPDATE':
      return state.map(t => t.id === action.payload.id ? action.payload : t);
    default:
      return state;
  }
};

export const useTasks = () => {
  const [tasks, dispatch] = useReducer(reducer, [], taskService.getAll);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    taskService.save(tasks);
  }, [tasks]);

  const addTask = (title, dueDate) => {
    dispatch({
      type: 'ADD',
      payload: {
        id: Date.now(),
        title,
        dueDate,
        createdAt: new Date().toISOString()
      }
    });
  };

  const deleteTask = (id) => dispatch({ type: 'DELETE', payload: id });
  const updateTask = (task) => dispatch({ type: 'UPDATE', payload: task });

  return { tasks, addTask, deleteTask, updateTask, filter, setFilter };
};
