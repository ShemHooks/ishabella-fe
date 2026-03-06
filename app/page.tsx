import Hero from "@/components/LandingPage/Hero";
import Advert from "@/components/LandingPage/Advert";
import ProductCategory from "@/components/LandingPage/ProductCategory";
import Featuredproduct from "@/components/LandingPage/Featuredproduct";
export default function Home() {
  return (
    <div>
      <Hero />
      <Advert />
      <Featuredproduct/>
      <ProductCategory />
    </div>
  );
}
