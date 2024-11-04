import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes.tsx';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter(routes, { basename: '/User-Registration' });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
