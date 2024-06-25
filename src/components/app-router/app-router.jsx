import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './const/routes';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';
import { AuthContext } from '../../context';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import Loader from '../UI/loader/loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)
  
  if (isLoading) {
    return <Loader />
  }

  return (
    <Routes>
      {PRIVATE_ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <PrivateRoute isAuth={isAuth}>
              {route.element}
            </PrivateRoute>
          }
          exact={route.exact}
        />
      ))}
      {PUBLIC_ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <PublicRoute isAuth={isAuth}>
              {route.element}
            </PublicRoute>
          }
          exact={route.exact}
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRouter;
