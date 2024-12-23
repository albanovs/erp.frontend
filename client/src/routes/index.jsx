import { createHashRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import LoginRoutes from './AuthenticationRoutes';

const router = createHashRouter([MainRoutes, LoginRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME,
  future: {
    v7_startTransition: true,
  },
});

export default router;