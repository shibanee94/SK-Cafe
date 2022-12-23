import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_coffee flex__center">
        <p className="app__specialMenu-menu_heading">COFFEE</p>
        <div className="app__specialMenu_menu_items">
          {data.coffees.map((coffee, index) => (
            <MenuItem key={coffee.title + index} title={coffee.title} price={coffee.price} tags={coffee.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu_coffee flex__center">
        <p className="app__specialMenu-menu_heading">MILK SHAKES</p>
        <div className="app__specialMenu_menu_items">
          {data.milkshakes.map((milkshake, index) => (
            <MenuItem key={milkshake.title + index} title={milkshake.title} price={milkshake.price } tags={milkshake.tags} />
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: "15px"}}> 
    <button className="custom__button">View More</button>

    </div>
  </div>
);

export default SpecialMenu;
