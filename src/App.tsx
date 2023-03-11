import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundView from './views/not-found/not-found';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
