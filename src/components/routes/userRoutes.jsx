import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../Home';
import MenuItem from '../product/MenuItem';
import CateringItem from '../product/CateringItem';
import Delivery from '../Delivery';
import About from '../About';
import Specials from '../Specials';
import Hours from '../Hours';

const userRoutes = () => {
  return (
    <>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<MenuItem/>}/>
      <Route path='/specials' element={<Specials/>}/>
      <Route path='/catering' element={<CateringItem/>}/>
      <Route path='/delivery' element={<Delivery/>}/>
      <Route path='/hours' element={<Hours/>}/>
      <Route path='/about' element={<About/>}/>
    </>
  );
};

export default userRoutes;