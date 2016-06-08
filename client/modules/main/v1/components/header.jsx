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

    const linkCell  = classNames('mdl-cell mdl-cell--2-col mdl-cell--4-col-phone')

    return headerLinks.map((link, key) => {
      return (
        <div className={linkCell} key={key}>
          <a className="main-header-link" href={link.href}>{link.label}</a>
        </div>
      )
    })
  }

  render() {
    const headerClass = classNames('mdl-cell mdl-cell--10-col-desktop mdl-cell--1-offset-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone')

    // const {logo} = this.props
    const logo = '/images/main/project-sarai-logo-green.jpg'

    return (
      <div className="mdl-grid">
        <div className={headerClass}>
          <div className="mdl-grid">
            <div className="mdl-cell--3-col mdl-cell--4-col-phone">
              <img className="main-header-logo" src={logo} />
            </div>

            <div className="mdl-cell--9-col mdl-cell--4-col-phone">
              <div className="mdl-grid">
                {this.renderLinks()}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Header;
