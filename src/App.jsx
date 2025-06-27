import { Route, Routes, useLocation } from 'react-router-dom';
import { PATH } from '@/utils/path';
import UserLayout from '@/layouts/UserLayout';
import PageRoutes from '@/pages';
import '@/App.css';

function App() {
  const location = useLocation();

  return (
    <div className='app'>
      <Routes>
        <Route index element={<PageRoutes.HomePage/>}/>
        <Route path='/login' element={<PageRoutes.LoginPage/>}/>
        <Route path='/join' element={<PageRoutes.JoinPage/>}/>

        <Route path='/tx' element={<UserLayout/>}>
          <Route PATH={PATH.LOGIN} element={<PageRoutes.LoginPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
