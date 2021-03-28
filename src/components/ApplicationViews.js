import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Closets from './closet/closets';
import SingleCloset from './closet/singleCloset';

export const ApplicationViews = () => {
    return <>

          <Route path="/closets" render={() => {
              if (localStorage.getItem('token')) {
                  return <>
                      <Closets />
                      </>
        } else {
            return <Redirect to="/login" />
        }
      }} />
