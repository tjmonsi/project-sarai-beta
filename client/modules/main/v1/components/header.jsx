import React from 'react';

class Header extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  render() {
    return (
      <div className="">
        Header goes here
      </div>
    );
  }
}

export default Header;
