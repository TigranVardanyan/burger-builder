import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from './../Navgiation/Toolbar/Toolbar';
import SiteDrawer from '../Navgiation/SideDrawer/SideDrawer';

const layout = (props) => (
  <Aux>
    <Toolbar/>
    <SiteDrawer/>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout;