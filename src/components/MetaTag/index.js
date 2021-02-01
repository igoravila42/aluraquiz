/* eslint-disable import/no-unresolved */
import React from 'react';
import MetaTag from 'react-meta-tag';

function MetaTags() {
  return (
    <div>
      <MetaTag>
        {/* Primary Meta Tags */}
        <title>Dark Souls Quiz</title>
        <meta name="title" content="Dark Souls Quiz" />
        <meta name="description" content="Um quiz de Dark souls criado durante a 2a imersão React e NextJS da Alura" />
      </MetaTag>
      <MetaTag>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz.igoravila42.vercel.app/" />
        <meta property="og:title" content="Dark Souls Quiz" />
        <meta property="og:description" content="Um quiz de Dark souls criado durante a 2a imersão React e NextJS da Alura" />
        <meta property="og:image" content="https://i.pinimg.com/originals/9c/19/74/9c19744d5204799dd343696ce4656548.jpg" />
      </MetaTag>
      <MetaTag>
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz.igoravila42.vercel.app/" />
        <meta property="twitter:title" content="Dark Souls Quiz" />
        <meta property="twitter:description" content="Um quiz de Dark souls criado durante a 2a imersão React e NextJS da Alura" />
        <meta property="twitter:image" content="https://i.pinimg.com/originals/9c/19/74/9c19744d5204799dd343696ce4656548.jpg" />
      </MetaTag>
    </div>
  );
}

export default MetaTags;
