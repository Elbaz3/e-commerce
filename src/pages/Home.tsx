import BestSelling from "@components/content/BestSelling/BestSelling";
import CategoriesList from "@components/content/CategoriesList/CategoriesList";
import Offer from "@components/content/Offer/Offer";
import OurProducts from "@components/content/OurProducts/OurProducts";
import Hero from "@components/content/Hero/Hero";
import { lazy, Suspense } from "react";

const Trends = lazy(() => import("@components/content/Trends/Trends"));
const Feature = lazy(() => import("@components/content/Feature/Feature"));

const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <Trends />
      </Suspense>

      <CategoriesList />
      <BestSelling />
      <Offer />
      <OurProducts />

      <Suspense fallback={null}>
        <Feature />
      </Suspense>
    </>
  );
};

export default Home;
