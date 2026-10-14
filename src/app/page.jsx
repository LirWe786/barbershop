

import Hero from "@/components/pages/hero/hero";
import Service from "@/components/pages/service/service";
import Header from "@/components/organisms/header/header";
import Masters from "@/components/pages/masters/masters";
import Map from "@/components/pages/map/map";
import Footer from "@/components/organisms/footer/footer";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <Service></Service>
      <Masters></Masters>
      <Map> </Map>
      <Footer></Footer>
    </main>
  );
}
