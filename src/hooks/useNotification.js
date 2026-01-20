import { toast } from 'react-toastify';

export const useNotification = () => {
  const notifySuccess = (message) => {
    toast.success(message, {
      position: 'top-center',
      autoClose: 3000
    });
  };

  return { notifySuccess };
};
