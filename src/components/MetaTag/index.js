/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import React from 'react';

function MetaTag() {
  return (
    <div>
      <Head>
        {/* Primary Meta Tags */}
        <title>Dark Souls Quiz</title>
        <meta name="title" content="Dark Souls Quiz" />
        <meta name="description" content="Um quiz de Dark souls criado durante a 2a imersão React e NextJS da Alura" />
      </Head>
      <Head>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz.igoravila42.vercel.app/" />
        <meta property="og:title" content="Dark Souls Quiz" />
        <meta property="og:description" content="Um quiz de Dark souls criado durante a 2a imersão React e NextJS da Alura" />
        <meta property="og:image" content="https://i.pinimg.com/originals/9c/19/74/9c19744d5204799dd343696ce4656548.jpg" />
      </Head>
      <Head>
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz.igoravila42.vercel.app/" />
        <meta property="twitter:title" content="Dark Souls Quiz" />
        <meta property="twitter:description" content="Um quiz de Dark souls criado durante a 2a imersão React e NextJS da Alura" />
        <meta property="twitter:image" content="https://i.pinimg.com/originals/9c/19/74/9c19744d5204799dd343696ce4656548.jpg" />
      </Head>
    </div>
  );
}

export default MetaTag;
