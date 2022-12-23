import React from 'react';

import { images } from "../../constants";

import './OurHistory.css';

const OurHistory = () => (
  <div className="OurHistory app__bg flex__center section__padding" id="history">
    {/* <div className="OurHistory-overlay flex__center">
      <img src={images.C} alt="c vap" />
    </div> */}
    <div className="OurHistory-content flex__center">
      <div className="OurHistory-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button type="button" className="custom__button">Read More</button>
      </div>
      <div className="OurHistory-overlay flex__center">
      {/* <img src={images.C} alt="c vap" /> */}
    </div>
    </div>
  </div>
);

export default OurHistory;
