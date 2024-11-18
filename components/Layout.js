// components/Layout.js
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NodeByte Documentation</title>
        <meta name="description" content="The home place for NodeByte Stuff." />
        <meta property="og:title" content="NodeByte Docs" />
        <meta property="og:description" content="The home place for NodeByte Stuff" />
        <meta property="og:image" content="https://beta.nodebyte.host/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFrontLogo.179d5a77.png&w=96&q=75" />
        <meta property="og:url" content="https://nodebyte.host/" />
        {/* Add other meta tags or link tags as needed */}
      </Head>
      <main>{children}</main>
    </>
  );
}
