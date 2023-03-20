import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SigIn from './pages/Sigin';
import SigUp from './pages/Sigup';
import Dashboard from './pages/Dashboard';

import AuthProvider from './contexts/AuthContext';

import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <div className='app'>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SigIn />} />
            <Route path='/register' element={<SigUp />} />
            <Route element={<PrivateRoute isPrivate={false} />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
