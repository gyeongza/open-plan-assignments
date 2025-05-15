import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';

// 라우트 설정
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const ROUTES = {
  HOME: '/',
};
