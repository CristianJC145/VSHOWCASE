import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import VshowcaseLayout from '../../shared/layout/VshowcaseLayout';
import RegisterUser from '../auth/Register';
import AppEmptyLayout from '../../shared/layout/AppEmptyLayout';

const VshowcaseRoutes: React.FC = () => {
  return (
      <Routes>
          <Route path="/*" element={ 
            <VshowcaseLayout>
              <Routes>
                <Route index element= {<HomePage/>}/>
              </Routes>
            </VshowcaseLayout>
          } />
          <Route path="/register/*" element={ 
            <AppEmptyLayout>
              <Routes>
                <Route index element = {<RegisterUser/>}/>
              </Routes>
            </AppEmptyLayout>
          } />

      </Routes>
  );
};

export default VshowcaseRoutes;