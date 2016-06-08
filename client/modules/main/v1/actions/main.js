export default {

  getHeaderLinks() {
    return [
      {
        label: 'Home',
        href: '/',
        hasSubLinks: false
      },
      {
        label: 'About Us',
        href: '/about',
        hasSubLinks: false
      },
      {
        label: 'Explore',
        href: '',
        hasSubLinks: true,
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
        href: '',
        hasSubLinks: false
      },
      {
        label: 'DSS',
        href: '',
        hasSubLinks: true,
      },
      {
        label: 'Get Involved',
        href: '',
        hasSubLinks: true,
      },
    ]
  }
}