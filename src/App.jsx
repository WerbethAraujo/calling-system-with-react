import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SigIn from './pages/Sigin';
import SigUp from './pages/Sigup';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SigIn />} />
          <Route path='/register' element={<SigUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
