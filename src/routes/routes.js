import { lazy } from 'react'

const Home = lazy(() => import('../pages/home'))
const NotFound = lazy(() => import('../pages/not-found'))
const LoginRedirect = lazy(() => import('../pages/login-redirect'))
const Login = lazy(() => import('../pages/login'))

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/connect/:providerName/redirect',
    component: LoginRedirect,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/*',
    component: NotFound,
  },
]

export default routes
