module.exports = {
  title: 'dicehub-ui.css',
  dest: 'vuepress',

  head: [
    ['link', { rel: 'stylesheet', href: '/dicehub-ui.css' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' }],
  ],

  themeConfig: {
    nav: [
      {
        text: 'Changelog',
        link: '#'
      }
    ],

    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/getting-started'
        ]
      },

      {
        title: 'Elements',
        collapsable: false,
        children: [
          ['/elements/typography', 'Typography'],
          ['/elements/buttons', 'Buttons'],
          ['/elements/forms', 'Forms'],
        ]
      },

      {
        title: 'Components',
        collapsable: false,
        children: [
          ['/components/alerts', 'Alerts'],
        ]
      },
    ],

    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
  },
}
