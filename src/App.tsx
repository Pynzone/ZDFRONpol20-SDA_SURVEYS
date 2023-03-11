import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HelloView from './views/hello/hello';
import NotFoundView from './views/not-found/not-found';
import UserView from './views/user/user';


const CurrentUserComponent: React.FC = () => {
  const params = useParams()
  console.log('Params from CurrentUserComponent', params)
  return <>Hello from CurrentUserComponent</>
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HelloView />}/>
          <Route path={'user'} element={<UserView />}/>
          <Route path={'user/:id'} element={<CurrentUserComponent />}/>
          <Route path={'*'} element={<NotFoundView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
