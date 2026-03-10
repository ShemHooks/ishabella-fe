import Hero from "@/components/LandingPage/Hero";
import Advert from "@/components/LandingPage/Advert";
import ProductCategory from "@/components/LandingPage/ProductCategory"; // 1. Import it here
import Featuredproduct from "@/components/LandingPage/Featuredproduct";
import VersePage from "@/components/LandingPage/Versepage";
import AboutPage from "@/components/LandingPage/Aboutpage";
export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* 2. Add it here */}
      <ProductCategory />
      <Featuredproduct />
      <Advert />
      <VersePage />
      <AboutPage />
    </main>
  );
}
  