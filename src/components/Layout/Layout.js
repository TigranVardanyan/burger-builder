import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from './../Navgiation/Toolbar/Toolbar';
import SiteDrawer from '../Navgiation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  }
  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  }

  render() {
    return (
      <Aux>
        <Toolbar/>
        <SiteDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;