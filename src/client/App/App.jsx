// Libs
import React, { Component, PropTypes } from 'react';

// Components
import Header from './_common/Header';
import Footer from './_common/Footer';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
