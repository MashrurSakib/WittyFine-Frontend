import React from 'react'
import { Helmet } from 'react-helmet-async';

const CustomHeader = ({ title, thumbnail = 'https://i.ibb.co/4ZH5LMs/favicon.jpg', overview = 'WittyFine - Professional Marketing Solutions for Your Business' }) => {

  return (
    <Helmet>
      {/* <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="marketing solutions, branding, advertising, digital marketing, social media marketing, SEO, PPC, email marketing, content marketing, marketing strategy, marketing agency" /> */}
      {/* <link rel="icon" type="image/svg+xml" href="https://i.ibb.co/c1Gsgst/The-Marketing-Kit-Logo-06.png" /> */}
      {/* <meta name="author" content="WittyFine" />
      <meta name="robots" content="INDEX, FOLLOW" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
      <meta property="og:title" content={overview} />
      <link
        property="og:image"
        href={thumbnail}
      />
      <title>WittyFine {title}</title>
    </Helmet>
  )
}

export default CustomHeader