import Image from "next/image";
import Footer from "./components/Footer";
import mainbg from "/public/assets/main.png";
import stock from "/public/assets/stock.png";
import Navbar from "./components/Navbar";
import { ZapIcon } from "lucide-react";
import Content from "./components/Content";
export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <div className="sticky top-0 ">
        <div className="h-10 backdrop-blur-lg bg-indigo-900/40"></div>
        <section className="bg-gradient-to-br from-zinc-950 via-zinc-900 to bg-zinc-950  border-t border-dashed border-indigo-500 ">
          <Content />
          <Footer />
        </section>
      </div>

      <Spacer />
    </div>
  );
}
const Hero = () => {
  return (
    <section className="flex sticky top-0 -z-10">
      <main className=" w-full p-10 pt-48 relative">
        {/* <p className=" absolute -z-40 opacity-40 mt-60 left-0 text-[500px] ">
          👚
        </p> */}

        <ZapIcon
          className=" absolute -z-40 opacity-5 mt-48 ml-24 "
          size={500}
        />
        <p className="text-2xl tracking-wider ">
          Day
          <ZapIcon className="inline-block" />
          ero
        </p>
        <h1 className="w-full bg-gradient-to-r  from-indigo-500 via-zinc-100 to-zinc-100 inline-block text-transparent bg-clip-text text-8xl mt-8 tracking-tighter  font-bold">
          Urban Edge Apparel :
          <span className="text-indigo-50"> A Data Analysis</span>
        </h1>
      </main>
      <aside className="w-full  p-4 rounded-bl-md">
        <Image src={mainbg} alt="" className="" />
        <section className="flex w-full ">
          <Image src={stock} alt="" className="py-4 w-2/4 " />
          <div className="bg-indigo-600 py-48 w-full m-4"></div>
        </section>
      </aside>
    </section>
  );
};

const Spacer = () => {
  return <div className="h-screen"></div>;
};
