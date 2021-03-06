import React, {Component} from 'react';

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'


class App extends Component {

  state= {
    sideDrawerOpen: false
  }
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHander = () => {
    this.setState({ sideDrawerOpen: false}
    )
  }

  render() {

    let backdrop;


    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {Backdrop}
        <main style={{marginTop: '64px'}}>
          <p> This is the page content</p>
        </main>      
      </div>
    )
  }
}

export default App;

