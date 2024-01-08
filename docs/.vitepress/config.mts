import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "JINESH SUBEDI",
  description: "Hello! Jinesh Subedi here, a dedicated Laravel developer with a love for building solid web applications. I thrive on transforming creative ideas into scalable, high-performance solutions. With a strong foundation in PHP and the Laravel framework, I provide vast experience in creating elegant and efficient code that matches the specific demands of clients.",
  base: "/viteresume/", 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Blog', link: '/blog' },
      { text: 'Video', link: '/video' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Blogs',
        collapsed: true,
        items: [
          { text: 'Laravel Google 2FA Authentication Tutorial', link: '/blog/laravel-google-2fa-auth' },
          { text: 'Changing PHP Version in Ubuntu: A Step-by-Step Guide', link: '/blog/change-php-version-in-ubuntu' },
          { text: 'Oracle to PostgreSQL SQL Converter Tool', link: '/blog/oracletopgsql' },
        ]
      },
      {
        text: 'API',
        collapsed: true,
        items: [
          { text: 'Nepali Forex Exchange Rates', link: '/blog/nepal-forex' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jineshsubedi' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jinesh-subedi-541550154/' },
      { icon: 'youtube', link: 'https://www.youtube.com/@sojhodeveloper' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 - Jinesh Subedi'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },
  sitemap: {
    hostname: 'https://jineshsubedi.github.io/viteresume/'
  }
})
