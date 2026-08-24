import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/arkpedia/',
  title: "ARKPEDIA",
  description: "Central de Aprendizado e Conhecimento",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Exemplos', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Exemplos',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/arthur643216vieira-dotcom/arkpedia' }
    ]
  }
})
