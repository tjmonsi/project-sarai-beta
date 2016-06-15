import React from 'react';

export default (PageCtx, {FlowRouter, mount}, {Components, links}) => {
  const {
    CLLayout,
    CLHeader,
    CLHeaderRow,
    CLNav,
    CLDrawer,
    CLBody,
    CLLogo,
    CLSpacer,
    CLGrid,
    CLMarkdownEditor,
    CLForm,
    CLSlider,
    CLToggle
  } = Components;

  FlowRouter.route('/', {
    action: () => {
      mount(PageCtx, {
        content: (
          <CLLayout classes="this-additional-class">
            <CLHeader>
              <CLHeaderRow>
                <CLSpacer hideOnLargeScreen="true" />
                <CLLogo />
                <CLSpacer />
                <CLNav links={links} />
              </CLHeaderRow>
            </CLHeader>
            <CLDrawer>
              <CLLogo />
              <CLNav links={links} />
            </CLDrawer>
            <CLBody>
              <CLGrid columns={2}>
                <CLForm
                  onChangeDispatch={(data) => {console.log(data)}}
                  data = {{
                    body: 'This is a text',
                    slider: 76,
                    yes: false
                  }}
                >
                  <CLMarkdownEditor
                    name='body'
                    rows={10}
                  />
                  <CLSlider
                    name='slider'
                  />
                  <CLToggle
                    name='yes'
                    label='Gauven'
                  />
                </CLForm>
              </CLGrid>
            </CLBody>
          </CLLayout>

        )
      });
    }
  });
};
