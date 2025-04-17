import React from 'react';
import Appetizer from '../categoriesCatering/Appetizer';
import Salad from '../categoriesCatering/Salad';
import Pasta from '../categoriesCatering/Pasta';
import Entree from '../categoriesCatering/Entree';
import Side from '../categoriesCatering/Side';
import Dessert from '../categoriesCatering/Dessert';
import CategoryBar from '../layout/CategoryBarCatering';
import '../../css/menu_page.css';

const CateringItem = () => {
  return (
    <>
      <CategoryBar/>
      <div className='MenuPage' style={{marginBottom: '25px'}}>
        <Appetizer/>
        <Salad/>
        <Pasta/>
        <Entree/>
        <Side/>
        <Dessert style={{marginBottom: '0px'}}/>
      </div>
    </>
  );
};

export default CateringItem;