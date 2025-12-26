import { Helmet } from "react-helmet-async";

const HomeSEO = () => {
  return (
    <Helmet>
      <title>Exclusive Store – Flash Sales, Top Brands & Best Deals</title>

      <meta
        name="description"
        content="Shop flash sales, top electronics, fashion, home essentials, and exclusive offers."
      />

      <link rel="canonical" href="https://website.com/" />

      <meta
        property="og:title"
        content="Exclusive Store – Best Deals & Flash Sales"
      />
      <meta
        property="og:description"
        content="Explore today's flash sales and top trending products."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://website.com/" />
      <meta property="og:image" content="https://website.com/og-image.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Exclusive Store – Best Deals Today" />
      <meta
        name="twitter:description"
        content="Discover trending products and discounts."
      />
      <meta name="twitter:image" content="https://website.com/og-image.jpg" />
    </Helmet>
  );
};

export default HomeSEO;
