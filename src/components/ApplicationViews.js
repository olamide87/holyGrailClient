import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Closets from './closet/closets';
import SingleCloset from './closet/singleCloset';

export const ApplicationViews = () => <>

          <Route path="/closets" render={() => {
            if (localStorage.getItem('token')) {
              return <>
                      <Closets />
                      </>;
            }
            return <Redirect to="/login" />;
          }} />

          <Route path="/viewCloset/:closetId" render={() => {
            if (localStorage.getItem('token')) {
              return <>
                    <SingleCloset />
                    </>;
            }
            return <Redirect to="/login" />;
          }} />
      </>;
