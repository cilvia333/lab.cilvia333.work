import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  title?: string;
};

const siteTitle = `playground.cilvia333.work`;
const description = `description`;
const url = `playground.cilvia333.work`;
const fullUrl = `https://${url}`;
const color = `#FFFFFF`;

const Layout: React.FC<Props> = (props) => {
  const { children, title = `This is the default title` } = props;
  return (
    <div>
      <Head>
        <title>{`${siteTitle} ${title && `| ${title}`}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={`${fullUrl}/ogp.png`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:title" content={title} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content={color} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="canonical"
          href={fullUrl}
          data-baseprotocol="https:"
          data-basehost={url}
        />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          {` `}
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
