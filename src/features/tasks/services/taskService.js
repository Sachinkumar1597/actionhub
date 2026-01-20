const STORAGE_KEY = 'actionhub_tasks';

export const taskService = {
  getAll() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  },

  save(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
};
