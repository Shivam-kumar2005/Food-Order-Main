import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import About from "@/components/layout/About";

export default function Home() {
  return (
    <>
     <Hero/>
     <HomeMenu/>
     <About />
     <section className="text-center my-16">
      <SectionHeaders subHeader={"Don't hesitate"} mainHeader={'Contact Us'}/>
      <div className="mt-8">
        <a className="text-gray-500 underline text-4xl" href="tel:+91 1234567890">+91 1234567890</a>
      </div>
     </section>
    </>
  );
}
