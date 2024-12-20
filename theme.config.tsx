import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo'
import Footer from './components/footer'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – NodeByte Documentation',
    }
  },
  logo: <Logo />,
  project: {
    link: 'https://github.com/NodeByteHosting',
  },
  chat: {
    link: 'https://discord.gg/2TgjJzrxm4',
  },
  docsRepositoryBase: 'https://github.com/NodeByteHosting/NodeByte-Docs',
  footer: {
    text: <Footer />
  },
  primaryHue: 264,
  head: (
    <>
      <meta name="description" content="Welcome to the NodeByte Hosting Documentation! Explore guides, troubleshooting tips, and best practices to make the most of our hosting services. Whether you're just starting or need advanced help, we've got the resources you need." />
      <meta name="keywords" content="NodeByte, hosting, docs, guides, troubleshooting, best practices" />
      <meta name="author" content="NodeByte Hosting" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="%s - NodeByte Documentation" />
      <meta property="og:description" content="Welcome to the NodeByte Hosting Documentation! Explore guides, troubleshooting tips, and best practices to make the most of our hosting services." />
      <meta property="og:image" content="https://beta.nodebyte.host/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo-Black.34859308.png&w=96&q=75" />
      <meta property="og:url" content="https://docs.nodebyte.host/" />
      <meta property="og:site_name" content="NodeByte Hosting" />
      <meta property="og:author" content="NodeByte Hosting" />
      <meta property="twitter:image" content="https://beta.nodebyte.host/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo-Black.34859308.png&w=96&q=75" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="%s - NodeByte Documentation" />
      <meta property="twitter:description" content="Welcome to the NodeByte Hosting Documentation! Explore guides, troubleshooting tips, and best practices to make the most of our hosting services." />
      <meta property="twitter:url" content="https://x.com/NodeByteHosting" />
      <link rel="icon" type="image/png" href="https://beta.nodebyte.host/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo-Black.34859308.png&w=96&q=75" />
    </>
  ),
 banner: {
  key: '2.0-release',
  text: (
  <a href="" target="_blank">
  🎉 New Documentation Site!
  </a>
  )
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
  ],
  search: {
    placeholder: 'Search the Docs...',
  },
  toc: {
    backToTop: true
  }
}

export default config
