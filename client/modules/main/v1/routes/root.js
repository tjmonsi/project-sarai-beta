export default (React, PageCtx, FlowRouter, mount) => {
  FlowRouter.route('/', {
    action: () => {
      mount(PageCtx, {
      });
    }
  });
};
