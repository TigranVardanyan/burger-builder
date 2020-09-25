import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

import classes from './SideDrawer.css'

const sideDrawer = (props) => {
  let attachedClasses = [classes.SiteDrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.SiteDrawer, classes.Open]
  }
  return(

    <Aux>
      {/*todo backdrop auto-hide not work after NavLinks*/}
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Aux>
  );
}

export default sideDrawer