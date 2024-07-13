import React from 'react';
/* import ClimateHubIcon from '../../assets/ClimateHubIcon.svg' */
/* import DuckIcon from '../../assets/duckIcon.svg' */
/* import DuckIconLake from '../../assets/duckIconLake.svg' */
/* import DuckIconLakeDark from '../../assets/duckIconLakeDark.svg' */
import About from '../../pages/About';
import { Link } from 'react-router-dom'
import { animateScroll } from 'react-scroll';
import './NavBar.css'

const NavBar = () => {

  const scrollOptions = {
    duration: 800,
    smooth: true
  }
  const logoHandler = () => {
    animateScroll.scrollToTop(scrollOptions)
  }
  return (
    <div className='container'>
      <Link
        className='navBar-logo-button'
        to='/'
        onClick={logoHandler}
      >
        <div className='navBarIcon'></div>
        {/* <img className='navBar-logo' src={DuckIconLakeDark} alt="Climate Hub icon" /> */}
        <h2 className='navBar-header-text'>Climate-Ducky</h2>
      </Link>
    </div>
  );
}

export default NavBar;
