import React from 'react';

class BasePage extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  componentDidUpdate() {
    console.log('update page');
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }
  render() {
    const {template} = this.props;
    return (
      <div className="main-v1-page-base-root">
        {template && typeof template === 'function' ? template() : null}
      </div>
    );
  }
}

export default BasePage;
