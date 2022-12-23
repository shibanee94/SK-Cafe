import React from 'react';
import { SubHeading  } from '../../components';
import { images } from "../../constants";

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Boost Your Mood</h1>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
      <p className="open__opensans" style={{ margin: '2rem 0'}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.</p>
      <button type="button" className="custom__buttom">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
    
  </div>
);

export default Header;
