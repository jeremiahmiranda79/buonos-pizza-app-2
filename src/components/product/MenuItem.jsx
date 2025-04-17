import React from 'react';
import Pizza from '../categories/Pizza';
import SpecialtyPizza from '../categories/SpecialtyPizza';
import GlutenFree from '../categories/GlutenFree';
import PizzaSlice from '../categories/PizzaSlice';
import Appetizer from '../categories/Appetizer';
import SausageRoll from '../categories/SausageRoll';
import Calzone from '../categories/Calzone';
import Stromboli from '../categories/Stromboli';
import Salad from '../categories/Salad';
import Entree from '../categories/Entree';
import HotSub from '../categories/HotSub';
import ColdSub from '../categories/ColdSub';
import SideOrder from '../categories/SideOrder';
import Dessert from '../categories/Dessert';
import Beverage from '../categories/Beverage';
import NYSpecialty from '../categories/NYSpecialty';
import CategoryBar from '../layout/CategoryBar';
import '../../css/menu_page.css';

const MenuItem = () => {
  return (
    <>
      <CategoryBar/>
      <div className='MenuPage'>
        <Pizza/>
        <SpecialtyPizza/>
        <GlutenFree/>
        <PizzaSlice/>
        <Appetizer/>
        <SausageRoll/>
        <Calzone/>
        <Stromboli/>
        <Salad/>
        <Entree/>
        <HotSub/>
        <ColdSub/>
        <SideOrder/>
        <Dessert/>
        <Beverage/>
        <NYSpecialty/>
      </div>
    </>
  );
}

export default MenuItem;