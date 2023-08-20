import React, { useEffect } from 'react';

import s from './ContactForm/ConatctForm.module.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import { CommonLayout } from './CommonLayout';
import { Contacts } from './Contacts';
import { Login } from './Routy/Login';
import { Register } from './Routy/Register';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/actions';

import { PrivateRoute } from './Routy/PrivateRoute';
import { PublicRoute } from './Routy/PublicRoute';

const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.auth.isLogged);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={isLogged ? s.contenerlogged : s.contener}>
      {isRefreshing ? (
        <p>Refreshing... please wait</p>
      ) : (
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route path="*" element={<Navigate to="login" />} />
            <Route path="/" element={<Navigate to="login" />} />

            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/contacts" component={<Register />} />
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" component={<Login />} />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export { App };
