import react from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Today from './pages/Today';
import Port from './pages/Port';
import Youtube from './pages/Youtube';
import Channel from './pages/Channel';
import Search from './pages/Search';
import Not from './pages/Not';

import Header from './components/section/Header';
import Main from './components/section/Main';
import Footer from './components/section/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/today' element={<Today />} />
          <Route path='/port' element={<Port />} />
          <Route path='/youtube' element={<Youtube />} />
          <Route path='/channel/:channelId' element={<Channel />} />
          <Route path='/search/:searchId' element={<Search />} />
          <Route path='*' element={<Not />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App
