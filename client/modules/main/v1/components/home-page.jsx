import React from 'react';

class HomePage extends React.Component {
  render() {
    const {header, banner, content, footer} = this.props;

    return (
      <div className="">
        {header}
        {banner}
        {content}
        {footer}
      </div>
    );
  }
}

export default HomePage;
