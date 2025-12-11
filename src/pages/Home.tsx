import CategoriesList from "@components/content/CategoriesList/CategoriesList";
import Hero from "@components/content/Hero/Hero";
import { lazy, Suspense } from "react";
import HomeSEO from "@components/helmets/HomeSeo";

const Trends = lazy(() => import("@components/content/Trends/Trends"));
const Feature = lazy(() => import("@components/content/Feature/Feature"));
const Offer = lazy(() => import("@components/content/Offer/Offer"));
const OurProducts = lazy(
  () => import("@components/content/OurProducts/OurProducts")
);

const BestSelling = lazy(
  () => import("@components/content/BestSelling/BestSelling")
);

const Home = () => {
  return (
    <>
      <HomeSEO />
      <Hero />
      <Trends />

      <CategoriesList />

      <Suspense fallback={null}>
        <BestSelling />
      </Suspense>

      <Suspense fallback={null}>
        <Offer />
      </Suspense>

      <Suspense fallback={null}>
        <OurProducts />
      </Suspense>

      <Suspense fallback={null}>
        <Feature />
      </Suspense>
    </>
  );
};

export default Home;
