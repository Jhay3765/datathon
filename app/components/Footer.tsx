import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" pt-24 pb-96 px-24">
      <p className="text-emerald-400 mb-16 text-7xl font-bold tracking-tighter">
        Meet The Team
      </p>
      <ul id="footer" className="grid grid-cols-3 gap-y-10 max-w-6xl ">
        <Person
          name="@Jerone"
          role="Front-End/Design"
          link="https://www.jerone.dev/"
        />
        {/* <Person name="@Jie" role="" /> */}
        <Person name="@Burak" role="Research" />
        <Person name="@Celeste" role="Data Science/Research" />
      </ul>
      <p className="py-24"></p>
    </footer>
  );
}

const Person = (props: { name: string; role: string; link?: string }) => {
  return (
    <div>
      <h3 className="tracking-tighter whitespace-nowrap text-3xl  text-emerald-100">
        {props.role}
      </h3>
      <Link
        href={props.link ? props.link : "/"}
        className="text-3xl font-bold hover:text-emerald-400"
      >
        {props.name}
      </Link>
    </div>
  );
};
