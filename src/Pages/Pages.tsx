import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home/Home';
import { Forecast } from './Forecast/Forecast';

const Pages = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/forecast/:city/:key' element={<Forecast />} />
    </Routes>
  );
};

export default Pages;
