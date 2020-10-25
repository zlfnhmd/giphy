import React from 'react';
import Head from 'next/head';
import styles from './default.module.css';

const siteTitle = 'Giphy Generator';
const siteDescription = 'Generate random gifs from giphy api';

interface DefaultProps {
  children: React.ReactNode;
}

export const Default = (props: DefaultProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={siteDescription} />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <main className={styles.main}>{props.children}</main>
      <style jsx global>{`
        body {
          margin: 0px;
        }
      `}</style>
    </div>
  );
};
