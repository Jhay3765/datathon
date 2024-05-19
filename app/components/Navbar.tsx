import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className=" top-0 w-full   fixed z-20 py-4 tracking-tighter flex justify-center  ">
      <section className=" cursor-pointer  items-center flex ">
        <Link
          href={
            "https://public.tableau.com/views/Project_17161521933840/GeographicVisualizaation?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link"
          }
          className="px-6 w-full flex items-center bg-indigo-700 hover:bg-indigo-900  rounded-l-3xl py-3  "
        >
          <p>Tableu</p>
          <ArrowUpRight className="inline-block" size={20} />
        </Link>
        <Link
          href={"#footer"}
          className="hover:bg-indigo-900 px-8 w-full  bg-indigo-700 rounded-r-3xl py-3"
        >
          Team
        </Link>
      </section>
    </div>
  );
}
