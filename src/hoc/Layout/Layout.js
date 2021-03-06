import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navgiation/Toolbar/Toolbar';
import SiteDrawer from '../../components/Navgiation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }
  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      console.log(prevState)
        return {
          showSideDrawer: !prevState.showSideDrawer
        }
      }
    )
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
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