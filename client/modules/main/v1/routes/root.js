export default (React, PageCtx, FlowRouter, mount) => {
  FlowRouter('/', () => {
    mount(PageCtx, {
    });
  });
};
