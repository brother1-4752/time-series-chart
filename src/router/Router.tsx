import { ReactNode } from 'react';
import App from '../App';
import { Home, NotFound } from '../pages';
import { createBrowserRouter } from 'react-router-dom';

interface IRouter {
  path: string;
  element: ReactNode;
  errorElement?: ReactNode;
  children?: IRouter[];
}

const routerData: IRouter[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [{ path: '', element: <Home /> }],
  },
];

const router = createBrowserRouter(routerData);

export default router;
