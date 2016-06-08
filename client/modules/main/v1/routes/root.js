import HomePage from './../containers/home-page';

export default (React, PageCtx, FlowRouter, mount) => {
  FlowRouter.route('/', {
    action: () => {
      mount(PageCtx, {
        template: () => (React.createElement(HomePage))
      });
    }
  });
};
