import React from 'react';
import classNames from 'classnames';

class Header extends React.Component {
  constructor() {
    super()
    this.renderLinks = this.renderLinks.bind(this)
  }
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

  renderLinks() {
    const {getHeaderLinks} = this.props
    const headerLinks = getHeaderLinks()
    console.log(headerLinks)
    return headerLinks.map((link, key) => {
      return (
        <div key={key}>
          {link.label}
        </div>
      )
    })
  }

  render() {
    const headerClass = classNames('mdl-cell mdl-cell--10-col-desktop mdl-cell--1-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone')

    const {logo} = this.props


    return (
      <div className="mdl-grid">
        <div className={headerClass}>
          <div className="mdl-grid">
            Header goes here
            <div className="mdl-cell--3-col mdl-cell--4-col-phone">
              <img className="main-header-logo" src={logo} />
            </div>

            <div className="main-header-links">
              {this.renderLinks()}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Header;
