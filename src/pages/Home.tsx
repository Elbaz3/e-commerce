import CategoriesList from "@components/home/CategoriesList/CategoriesList";
import Hero from "@components/home/Hero/Hero";
import { lazy, Suspense } from "react";
import HomeSEO from "@components/helmets/HomeSeo";
import { useAppSelector } from "@store/hook";

const Trends = lazy(() => import("@components/home/Trends/Trends"));
const Feature = lazy(() => import("@components/home/Feature/Feature"));
const Offer = lazy(() => import("@components/home/Offer/Offer"));
const OurProducts = lazy(
  () => import("@components/home/OurProducts/OurProducts")
);

const BestSelling = lazy(
  () => import("@components/home/BestSelling/BestSelling")
);

const Home = () => {
  const lang = useAppSelector((state) => state.langSlice.lang);

  return (
    <>
      <HomeSEO />
      <Hero />
      <Trends lang={lang} />

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
