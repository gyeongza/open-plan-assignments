import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Layout from './components/common/Layout';
import NotFound from './pages/NotFound';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'result', element: <Result /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const ROUTES = {
  HOME: '/',
  RESULT: '/result',
};
