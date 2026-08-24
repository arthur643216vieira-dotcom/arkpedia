import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ARKPEDIA",
  description: "Download de Conteúdos",
  base: '/arkpedia/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/arthur643216vieira-dotcom/arkpedia' }
    ]
  }
})
