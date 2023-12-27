"use client";
import React from "react";
import { useState } from "react";
import Card from "../(shared)/Card";
import useMediaQuery from "app/hooks/useMediaQuery"; //used only with the lead text to make it long

type Props = {};

const MainSection = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState("radio-1");

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };
  type card = {
    title: string;
    type: string;
    date: string;
    image: string;
  };
  const cards: Array<card> = [
    {
      title: "Play the real-life city exploration games in Vidin,",
      type: "blog",
      date: "22/02/2002",
      image: "/assets/articles-assets/article-1.jpg",
    },
    {
      title: "Play the real-life city exploration games in Vidin,",
      type: "blog",
      date: "22/02/2002",
      image: "/assets/articles-assets/article-1.jpg",
    },
    {
      title: "Play the real-life city exploration games in Vidin,",
      type: "blog",
      date: "22/02/2002",
      image: "/assets/articles-assets/article-1.jpg",
    },
    {
      title: "Play the real-life city exploration games in Vidin,",
      type: "blog",
      date: "22/02/2002",
      image: "/assets/articles-assets/article-1.jpg",
    },
    {
      title: "Play the real-life city exploration games in Vidin,",
      type: "blog",
      date: "22/02/2002",
      image: "/assets/articles-assets/article-1.jpg",
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1059px)");

  return (
    <section className="h-full w-11/12 m-auto z-0">
      <div className="flex flex-col md:flex-row justify-center items-center h-full gap-10 md:gap-28 ">
        {/* LEFT SIDE TEXT */}
        <div className=" md:w-1/3 relative ">
          <div className=" md:fixed md:top-1/3 md:left-14 md:w-1/3 mt-14">
            {/* LEADING BIG TEXT */}

            {isAboveMediumScreens ? (
              <div className="text-7xl font-ivyMode text-custom-grey">
                <h1>
                  Read what
                  <br />
                  excites,
                  <br />
                  achieves and moves us
                </h1>
              </div>
            ) : (
              <div className="text-7xl font-ivyMode text-custom-grey">
                <h1>Read what excites, achieves and moves us</h1>
              </div>
            )}

            {/* BUTTONS */}
            <form className="flex justify-center items-center border-2 rounded-full p-1 bg-custom-border  font-satoshiLight text-lg my-4 below_md:mt-6">
              <div className="flex-1 ">
                <input
                  type="radio"
                  id="radio-1"
                  className="hidden"
                  checked={selectedOption === "radio-1"}
                  onChange={() => handleClick("radio-1")}
                />
                <label
                  htmlFor="radio-1"
                  className={`flex flex-col h-14 hover:bg-slate-100 cursor-pointer rounded-full justify-center items-center transition-colors duration-300 ${
                    selectedOption === "radio-1" ? "bg-slate-100" : ""
                  }`}
                >
                  <span className="">All</span>
                </label>
              </div>
              <div className="flex-1">
                <input
                  type="radio"
                  id="radio-2"
                  className="hidden"
                  checked={selectedOption === "radio-2"}
                  onChange={() => handleClick("radio-2")}
                />
                <label
                  htmlFor="radio-2"
                  className={`flex flex-col h-14 hover:bg-slate-100 cursor-pointer rounded-full justify-center  items-center transition-colors duration-300 ${
                    selectedOption === "radio-2" ? "bg-slate-100" : ""
                  }`}
                >
                  <span className="">Latest</span>
                </label>
              </div>
              <div className="flex-1">
                <input
                  type="radio"
                  id="radio-3"
                  className="hidden"
                  checked={selectedOption === "radio-3"}
                  onChange={() => handleClick("radio-3")}
                />
                <label
                  htmlFor="radio-3"
                  className={`flex flex-col h-14 hover:bg-slate-100 cursor-pointer rounded-full justify-center items-center transition-colors duration-300 ${
                    selectedOption === "radio-3" ? "bg-slate-100" : ""
                  }`}
                >
                  <span className="">Oldest</span>
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="md:mt-40 md:gap-20">
          <div className=" md:grid md:grid-cols-2  md:gap-7 ">
            {cards.map((card, index) => (
              <div
                key={index}
                className={
                  (index + 1) % 2 === 0 ? "md:mt-[25%] md:mb-[-25%]" : ""
                }
              >
                <Card data={card} />
              </div>
            ))}
            {/*  <div className="">
              <Card data={cards[0]} />
            </div>
            <div className="mt-[25%] mb-[-25%]">
              <Card data={cards[0]} />
            </div>
            <div>
              <Card data={cards[0]} />
            </div>
            <div className="mt-[25%] mb-[-25%]">
              <Card data={cards[0]} />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
