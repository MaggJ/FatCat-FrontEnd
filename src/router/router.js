import { lazy } from 'react';
import { renderRoutes } from 'react-router-config';
import Home from '../views/home';


const routes = [
  {
    path: '/',
		exact: true,
		component: Home
  }
]

const router = renderRoutes(routes);

export default router;
