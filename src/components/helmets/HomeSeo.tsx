import { Helmet } from "react-helmet";

const HomeSEO = () => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>Exclusive Store – Flash Sales, Top Brands & Best Deals</title>
      <meta
        name="description"
        content="Shop flash sales, top electronics, fashion, home essentials, and exclusive offers. Discover Apple, Samsung, Sony products and more at unbeatable prices."
      />
      <link rel="canonical" href="https://website.com/" />

      <meta
        property="og:title"
        content="Exclusive Store – Best Deals & Flash Sales"
      />
      <meta
        property="og:description"
        content="Explore today's flash sales, top trending products, and limited music experience offers. Shop Apple, Samsung & more."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://website.com/" />
      <meta property="og:image" content="https://website.com/og-image.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Exclusive Store – Best Deals Today" />
      <meta
        name="twitter:description"
        content="Discover trending products, discounts, and exclusive limited-time offers."
      />
      <meta name="twitter:image" content="https://website.com/og-image.jpg" />

      <meta
        name="keywords"
        content="flash sales, electronics deals, fashion, Apple iPhone offers, Samsung Galaxy, online shopping"
      />
    </Helmet>
  );
};

export default HomeSEO;
