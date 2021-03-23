import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { NavBar } from './nav/NavBar';
import { Login } from './auth/Login';
import { Register } from './auth/Register';

export const LevelUp = () => (
    <>
        <Route render={() => {
          if (localStorage.getItem('lu_token')) {
            return <>
                    <Route render={NavBar} />
                    <Route render={(props) => <ApplicationViews {...props} />} />
                </>;
          }
          return <Redirect to="/login" />;
        }} />

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
);
