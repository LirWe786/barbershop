

import Hero from "@/components/pages/hero/hero";
import Service from "@/components/pages/service/service";
import Header from "@/components/organisms/header/header";
import Masters from "@/components/pages/masters/masters";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <Service></Service>
      <Masters></Masters>
    </main>
  );
}
