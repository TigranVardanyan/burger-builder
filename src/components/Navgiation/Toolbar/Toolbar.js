import React from 'react';
import Logo from '../../Logo/Logo'
import classes from './Toolbar.css';
import NavigationItems from "./../../Navgiation/NavigationItems/NavigationItems";




const toolbar = () => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo/>
    </div>
    <nav>
      <NavigationItems/>
    </nav>
  </header>
)

export default toolbar