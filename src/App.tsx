import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HelloView from './views/hello/hello';
import NotFoundView from './views/not-found/not-found';
import CurrentUserView from './views/user/current-user/current-user';
import UserView from './views/user/user';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HelloView />} />
          <Route path={'user'} element={<UserView />}>
            <Route path={':id'} element={<CurrentUserView/>} />
          </Route>
          <Route path={'*'} element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
