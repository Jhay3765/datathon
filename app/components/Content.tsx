import Image from "next/image";
import React from "react";
import example from "/public/assets/example.png";
import season from "/public/assets/season.png";
import basket from "/public/assets/basket.png";
import basketyear from "/public/assets/baskety.png";
import productq from "/public/assets/productq.png";
import highest from "/public/assets/highest.png";
import store from "/public/assets/store.png";
import graph from "/public/assets/graph.png";
import rev from "/public/assets/rev.png";

import dress from "/public/assets/dress.png";

import { ArrowUp, TrendingUp } from "lucide-react";

export default function Content() {
  return (
    <div className="p-12 ">
      <span className="text-xl flex justify-end pr-24 ">01 </span>
      <h2 className="text-5xl text-zinc-50 font-bold text-center">
        Analyzing the Trends in the Data
      </h2>
      <main className="flex justify-between mt-24  px-24 ">
        <section className="max-w-4xl ">
          <h3 className="text-3xl text-emerald-200 max-w-3xl tracking-tighter leading-tight">
            Is there any seasonality in purchases for certain products?
          </h3>
          <p className="mt-8 text-2xl leading-relaxed max-w-2xl text-white">
            Customers tend to purchase more during the summer months and less
            during winter months.
          </p>
        </section>
        <aside className="text-sm max-w-2xl">
          <Image src={season} alt="" />
          <p className="text-right mt-4 underline">top</p>
          <p className="text-right  italic ">
            Seasonality of Product Purchases
          </p>
        </aside>
      </main>
      <main className="flex justify-between mt-24  px-24 text-right ">
        <aside className="text-sm max-w-2xl">
          <Image src={productq} alt="" />
          <p className="text-right mt-4 underline">top</p>
          <p className="text-right  italic ">Trends of Product Quantity</p>
        </aside>
        <section className="max-w-4xl ">
          <h3 className="text-3xl text-emerald-200  max-w-3xl tracking-tighter leading-tight text-right">
            Which products have seen a significant increase or decrease in
            quantity ordered over the years?
          </h3>
          <p className="mt-8 text-2xl leading-relaxed max-w-3xl text-white">
            Product <span className="text-emerald-400">6400</span> has seen
            significant increase in the first few years then significant
            decrease thereafter.
          </p>
        </section>
      </main>
      <h2 className="bg-indigo-600 px-4 py-1 text-5xl w-fit mx-auto mt-24">
        Basket Size
      </h2>
      <section className="flex justify-between mt-12 px-24">
        <aside className="border w-full p-8 max-w-3xl rounded-2xl">
          <Image src={basket} alt="" />
          <p className="mt-4 text-3xl">
            We see that during the month of may, customers tend to purchase more
            items at one time. The opposite could be said of January and
            December.
          </p>
        </aside>
        <div className="border w-full p-8 max-w-3xl rounded-2xl">
          <Image src={basketyear} alt="" />
          <p className="mt-4 text-3xl">
            Customers bought more items at one time in the year of 2018 and
            2022, however, they didnt buy much in 2013 and 2024.
          </p>
        </div>
      </section>

      <span className="text-xl flex justify-end pr-24 mt-48">02 </span>
      <h2 className="text-5xl text-zinc-50 tracking-tighter text-center">
        Product Report
      </h2>
      {/* <BestSellers />
      <Three /> */}
      {/* <section className="mt-24 px-24">
        <div className="text-3xl w-fit bg-indigo-600 px-4 py-1 ">
          Peak sales periods <TrendingUp className="inline-block" />
        </div>
      </section> */}
      <section className="flex justify-between mt-12 px-24">
        <aside className="border w-full p-8 max-w-3xl rounded-2xl">
          <Image src={highest} alt="" />
          <p className="mt-4 text-3xl">
            Product 1009 is the highest selling product in every month except
            for July. 10090 is the highest selling variant. In the month of
            July, product 1140 is the highest selling and the variant is 11400.
          </p>
        </aside>
        <div className="border w-full p-8 max-w-3xl rounded-2xl">
          <Image src={store} alt="" />
          <p className="mt-4 text-3xl">
            The store had the most sells in 2018 but the most revenue in 2022.
            We see that the store increased both in the beginning but after
            2018, they steadily started to decline.
          </p>
        </div>
      </section>

      <section className="flex justify-between mt-24 px-24">
        <aside className="border w-full p-8 max-w-3xl rounded-2xl">
          <Image src={graph} alt="" />
          <p className="mt-4 text-3xl">
            From the geographical data, user purchase more in the United States.
            Georgia, North Carolina, Connecticut and Florida provide the most
            sells. The cities for each states are displayed as well.
          </p>
        </aside>
        <div className="border w-full p-8 max-w-3xl rounded-2xl">
          <Image src={rev} alt="" />
          <p className="mt-4 text-3xl">
            We see the trend for this store is that customer buy more during May
            and the summer months in general. They recieve fewer sells and
            revenue during the winter months.
          </p>
        </div>
      </section>
    </div>
  );
}

const Three = () => {
  return (
    <ul className="flex justify-between px-24  leading-8  mt-24">
      <Item name="Orders" />
      <Item name="Revenue" />
      <Item name="Quantity" />
    </ul>
  );
};
const Item = (props: { description?: string; name: string }) => {
  return (
    <div className="max-w-sm">
      <h3 className="text-3xl font-bold whitespace-nowrap">
        {props.name} By Month <span className="text-2xl">{"(All Time)"}</span>{" "}
      </h3>
      <div className="border-t-4 border-indigo-600 py-4  mt-4">
        <p>This Item sold the most for this period</p>
      </div>
    </div>
  );
};

const BestSellers = () => {
  return (
    <div className="h-screen mt-36 px-24">
      <h2 className="text-3xl text-right  ">
        Top Selling Products {"(All Time)"}{" "}
      </h2>
      <div className="flex justify-end  border py-6 rounded-md mt-4">
        <section className="flex flex-col w-full gap-6 text-zinc-950 font-bold text-xl Sans">
          <div className="h-12 w-1/6 bg-indigo-600  grid place-content-center">
            $144
          </div>
          <div className="h-12 w-2/6 bg-indigo-600  grid place-content-center">
            $123,123
          </div>
          <div className="h-12 w-3/6 bg-indigo-600  grid place-content-center">
            $123,123
          </div>
          <div className="h-12 w-4/6 bg-indigo-600  grid place-content-center">
            $123,123
          </div>
          <div className="h-12 w-5/6 bg-indigo-600  grid place-content-center">
            $123,123
          </div>
        </section>
      </div>

      <ul className="flex  mt-24 gap-24">
        <TrendingItem />
        <TrendingItem />
        <TrendingItem />
      </ul>
    </div>
  );
};

const TrendingItem = () => {
  return (
    <div className=" w-fit relative overflow-hidden hover:overflow-visible rounded-3xl hover:bg-indigo-400/10 cursor-pointer transition-all duration-500 ">
      <section className="absolute blur-md border-4 top-2 left-0 border-indigo-300 size-72"></section>
      <div className="border border-zinc-300/20 shadow-md rounded-3xl p-8 px-24 grid place-content-center text-4xl max-w-xs">
        ❄️
      </div>
    </div>
  );
};
