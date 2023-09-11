import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);
