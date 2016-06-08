import React from 'react';
import classNames from 'classnames';

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
    const headerClass = classNames('mdl-cell mdl-cell--10-col-desktop mdl-cell--1-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone')

    return (
      <div className="mdl-grid">
        <div className={headerClass}>
          Header goes here
        </div>
      </div>
    );
  }
}

export default Header;
