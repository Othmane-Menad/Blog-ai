"use client";
import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import useMediaQuery from "app/hooks/useMediaQuery";
import Image from "next/image";
import menuImg from "public/assets/menu-img.jpg";
type Props = {};

const Menu = (props: Props) => {
  /* HANDLING HOVER COLOR CHANGE EFFECT */
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index: any) => {
    setHoveredIndex(index);
  };

  const isAboveMediumScreens = useMediaQuery("(min-width: 800px)");

  type item = { name: string; url: string; spanClass?: string };

  const items: Array<item> = [
    {
      name: "Work",
      url: "/",
      spanClass:
        "absolute h-3/4 w-[1.5px] bg-black left-[75%] top-1/2 transform -translate-y-1/2 rotate-12 opacity-20",
    },
    {
      name: "Services",
      url: "/",
      spanClass:
        "absolute h-3/4 w-[1.5px] bg-black left-[100%] top-1/2 transform -translate-y-1/2 rotate-12 opacity-20 ml-4",
    },
    {
      name: "About",
      url: "/",
      spanClass:
        "absolute h-3/4 w-[1.5px] bg-black left-[80%] top-1/2 transform -translate-y-1/2 rotate-12 opacity-20",
    },
    {
      name: "Blog",
      url: "/",
      spanClass:
        "absolute h-3/4 w-[1.5px] bg-black left-[65%] top-1/2 transform -translate-y-1/2 rotate-12 opacity-20",
    },
  ];

  /* THE WHOLE MENU ANIMATION */
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        staggerChildren: 0.09,
        duration: 0.5,
        /* ease: [0.12, 0, 0.39, 0], */
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        staggerChildren: 0.09,
        duration: 0.8,
        /* ease: [0.22, 1, 0.36, 1], */
      },
    },
  };

  {
    /* THE LINKS ANIMATION */
  }
  const containerAnimate = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,

      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const itemAnimate = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const imageAnimate = {
    initial: {
      x: 600,
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: 600,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textAnimate = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    /* THE WHOLE MENU ANIMATION */
    <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed left-0 top-[65px] w-full h-screen origin-top bg-custom-background text-black z-10"
    >
      {isAboveMediumScreens ? (
        <div className="flex  justify-between h-full">
          <div className="text-7xl md:text-9xl font-ivyMode  self-end mb-24 p-2">
            {/* THE LINKS ANIMATION */}
            <motion.ul
              className=""
              initial="initial"
              animate="animate"
              exit="exit"
              variants={containerAnimate}
            >
              {items.map((item: item, index: number) => (
                <motion.div key={index} variants={itemAnimate}>
                  <Link href={item.url}>
                    <li
                      className={`p-3 relative ${
                        hoveredIndex === null
                          ? "text-black transition duration-300"
                          : hoveredIndex === index
                          ? "text-black transition duration-300"
                          : "opacity-20 transition-opacity duration-300"
                      }`}
                      onMouseEnter={() => handleHover(index)}
                      onMouseLeave={() => handleHover(null)}
                    >
                      {item.name}
                      <span className={item.spanClass}></span>
                    </li>
                  </Link>
                </motion.div>
              ))}
            </motion.ul>
          </div>
          <div className="flex flex-col items-start justify-between p-5">
            <motion.div className="" variants={imageAnimate}>
              <Image
                alt="Laptop on table"
                width={500}
                height={500}
                src={menuImg}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 480px) 100vw,
                  (max-width: 900px) 85vw,
                  (max-width: 1060px) 75vw,
                  60vw"
              />
            </motion.div>
            <motion.div
              className="flex items-start justify-start mb-20 text-base p-3 w-full"
              variants={textAnimate}
            >
              <ul className="">
                <li className="p-1">mail-mail-mail</li>
                <li className="p-1">Oran, Algeria</li>
              </ul>
              <ul className="">
                <li className="p-1">Instagram</li>
                <li className="p-1">linkedIn</li>
              </ul>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start m-2 justify-start h-3/5 gap-32">
          <div className="text-7xl md:text-9xl font-ivyMode p-2">
            {/* THE LINKS ANIMATION */}
            <motion.ul
              className=" "
              initial="initial"
              animate="animate"
              exit="exit"
              variants={containerAnimate}
            >
              {items.map((item: item, index: number) => (
                <motion.div key={index} variants={itemAnimate}>
                  <Link href={item.url}>
                    <li
                      className={`p-3 relative ${
                        hoveredIndex === null
                          ? "text-black transition duration-300"
                          : hoveredIndex === index
                          ? "text-black transition duration-300"
                          : "opacity-20 transition-opacity duration-300"
                      }`}
                      onMouseEnter={() => handleHover(index)}
                      onMouseLeave={() => handleHover(null)}
                    >
                      {item.name}
                      <span className={item.spanClass}></span>
                    </li>
                  </Link>
                </motion.div>
              ))}
            </motion.ul>
          </div>
          <motion.div
            className="flex items-start justify-between text-base font-satoshiLight m-4"
            variants={textAnimate}
          >
            <ul className="">
              <li className="p-1">mail-mail-mail</li>
              <li className="p-1">Oran, Algeria</li>
            </ul>
            <ul className="">
              <li className="p-1">Instagram</li>
              <li className="p-1">linkedIn</li>
            </ul>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Menu;
