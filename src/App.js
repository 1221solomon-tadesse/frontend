import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';

import Layout from './components/Layout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
