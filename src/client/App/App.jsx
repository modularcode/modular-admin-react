// Libs
import React, { Component, PropTypes } from 'react';


// Components
import Header from './_common/Header';
import Footer from './_common/Footer';
import Sidebar from './_common/Sidebar';

// Styled components
import {
  AppContainer,
  AppContent,
} from './AppStyled';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <AppContainer className="AppContainer">
        <Header />
        <Sidebar />
        <AppContent className="AppContent">
          {this.props.children}
        </AppContent>
        <Footer />
      </AppContainer>
    );
  }
}
