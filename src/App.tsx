import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Views
import MainView from './views/main/main';
import NotFoundView from './views/not-found/not-found';
import InfoView from './views/info/info';
import SurveyView from './views/survey/survey';
import SurveysListView from './views/surveys-list/surveys-list';
import SingleSurveyView from './views/surveys-list/single-survey/single-survey';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainView />}>
            <Route index element={<InfoView />} />
            <Route path={'survey'} element={<SurveyView />} />
            <Route path={'surveys-list'} element={<SurveysListView />}>
              <Route path={':id'} element={<SingleSurveyView />} />
            </Route>
            <Route path={'*'} element={<NotFoundView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
