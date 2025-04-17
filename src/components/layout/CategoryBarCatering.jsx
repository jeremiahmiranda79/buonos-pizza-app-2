import React from 'react';
import {CATEGORIES_CATERING} from '../../constants/cateringMenuItems/categoriesCatering';
import '../../css/nav_bar.css';

const CategoryBarCatering = () => {
  return (
    <div className="main-container" >
      <div className="tab-nav-bar">
        <div className="tab-navigation">
          <ul className="tab-menu">
            <li className="tab-btn"><a href={'#' + 0} className="active">All</a></li>
            {CATEGORIES_CATERING.map((category) => (<li key={category.id} className="tab-btn"><a href= {'#' + category.id}>{category.name}</a></li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryBarCatering;