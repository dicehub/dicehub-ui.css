module.exports = {
  title: 'dicehub-ui.css',
  dest: 'vuepress',

  head: [
    ['link', { rel: 'stylesheet', href: '/dicehub-ui.css' }],
    ['link', { rel: 'icon', href: `/logo.png` }]
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
          ['/alerts', 'Alerts'],
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