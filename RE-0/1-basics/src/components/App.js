import Layout from '../pages/Layout';
import About from '../pages/About';
import Home from '../pages/Home';
import Recommend from '../pages/Recommend';
import Top from '../pages/Top';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='recommend' element={<Recommend />} />
          <Route path='top' element={<Top />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
