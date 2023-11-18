import { defineConfig } from 'vitepress'
import { getPosts, getPostLength } from './theme/serverUtils'

export default async function(){
  return defineConfig({
    title: '嘟嘟 - 个人博客',
    lang: 'en-US',
    description: '嘟嘟 - 个人博客',
    head: [
      ['link', { rel: 'icon', href: '/avatar.png' }],
      ['meta', { name: 'author', content: '嘟嘟' }],
      ['meta', { property: 'og:title', content: '嘟嘟' }],
      ['meta', { property: 'og:description', content: '嘟嘟 - 个人博客' }],
    ],
    themeConfig:{
        // 搜索配置
        search: {
          provider: 'local',
        },
        // https://vitepress.dev/reference/default-theme-config
        logo: '/avatar.png',
        // @ts-ignore
        avator: '/avatar.png',
        posts: await getPosts(),
        pageSize: 5,
        postLength: await getPostLength(),
        aside: false,
        nav:[
          { text: '🏡 首页', link: '/' },
          { text: '📃 路在脚下', link: '/page/timeline' },
          { text: '🧩 我的项目', link: '/page/projects' },
          { text: '🏷️ Tags', link: '/page/tags' },
          { text: '🛠️ Use', link: '/page/use' },
          { text: '💬 讨论区', link: '/page/forum' },
        ],
        // 社交网站
        socialLinks: [{ icon: 'github', link: 'https://github.com/wangrongding/fedtop' }],
    },
    markdown:{
      lineNumbers: true, // 代码块显示行号
      theme: 'one-dark-pro', // 主题 'material-theme-palenight'
    },
    vite:{
      server:{
        host:'0.0.0.0',
        port: 1111,
        open: false,
        hmr: true,
      },
      plugins:[],
      // 热更新时，清空控制台
      clearScreen: true,
    }
  })
}

