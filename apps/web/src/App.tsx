import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={3000} />
    </QueryClientProvider>
  );
}
