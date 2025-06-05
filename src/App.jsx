import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { PATH } from '@/utils/path';
import UserLayout from '@/layouts/UserLayout';
import PageRoutes from '@/pages';
import '@/App.css';

function App() {
  const location = useLocation();

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
          <Route index element={<PageRoutes.HomePage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
