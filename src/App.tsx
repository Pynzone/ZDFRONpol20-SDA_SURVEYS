import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'

const HelloComponent: React.FC = () => {
  return <>Hello from HelloComponent</>
}

const UserComponent: React.FC = () => {
  return <>Hello from UserComponent</>
}

const CurrentUserComponent: React.FC = () => {
  const params = useParams()
  console.log('Params from CurrentUserComponent', params)
  return <>Hello from CurrentUserComponent</>
}

const NotFoundComponent: React.FC = () => {
  return <>NotFoundComponent</>
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HelloComponent />}/>
          <Route path={'user'} element={<UserComponent />}/>
          <Route path={'user/:id'} element={<CurrentUserComponent />}/>
          <Route path={'*'} element={<NotFoundComponent />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
