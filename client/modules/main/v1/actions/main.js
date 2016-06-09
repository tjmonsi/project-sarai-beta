export default {

  getHeaderLinks() {
    return [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'About Us',
        href: '/about'
      },
      {
        label: 'Explore',
        href: '',
        subLinks: [
          {
            label: 'Suitability Maps',
            href: ''
          },
          {
            label: 'Weather Monitoring',
            href: ''
          }
        ]
      },
      {
        label: 'Planting Dates',
        href: ''
      },
      {
        label: 'DSS',
        href: '',
      },
      {
        label: 'Get Involved',
        href: ''
      },
    ]
  },

  getNavLinks() {

    return [
      {
        url: '/',
        name: 'Link 1'
      },
      {
        url: '/',
        name: 'Link 2'
      },
      {
        url: '/atomic-design',
        name: 'Link 3'
      },
      {
        url: '#',
        name: 'Link 4',
        links: [
          {
            url: '/',
            name: 'Link 1'
          },
          {
            url: '/',
            name: 'Link 2'
          },
          {
            url: '/atomic-design',
            name: 'Link 3'
          }
        ]
      },
      {
        url: '/',
        name: 'Link 5',
        actionHandler: () => {
          alert('Pink 5');
        }
      }
    ];
  }
}