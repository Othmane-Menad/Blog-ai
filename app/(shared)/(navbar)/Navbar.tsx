"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Logo from "public/assets/logo.svg";
import useMediaQuery from "app/hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";
import Menu from "./(BurgerMenu)/BurgerMenu";

type Props = {};

const Navbar = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 800px)");

  const menuNav = [
    {
      title: "Work",
      href: "/",
    },
    {
      title: "Services",
      href: "/",
    },
    {
      title: "About",
      href: "/",
    },
    {
      title: "Blog",
      href: "/",
    },
  ];
  /* BURGER MENU ANIMATION */
  const activeNavAnimationLine1 = {
    initial: {
      // initial styles
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    animate: {
      // animate styles
      rotate: 45,
      y: 3,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  const activeNavAnimationLine2 = {
    initial: {
      // initial styles
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      // animate styles
      rotate: -45,
      y: -3,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <header className="sticky top-0 left-0 z-10 bg-custom-background">
      <nav className="border-b border-custom-border">
        <div className="p-4">
          {isAboveMediumScreens ? (
            <div className="flex items-center justify-between">
              <div className="mt-1">
                <Image alt="advert-1" src={Logo} width={90} />
              </div>

              <div
                className="cursor-pointer"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                {/* MENU */}
                <AnimatePresence>
                  {isActive ? (
                    <div className="burger">
                      <motion.div
                        className="line1 w-7 h-[2px] m-1 bg-slate-900 pointer-events-none"
                        initial="initial"
                        animate={isActive ? "animate" : "initial"}
                        variants={activeNavAnimationLine1}
                      ></motion.div>
                      <motion.div
                        className="line2 w-7 h-[2px] m-1 bg-slate-900 pointer-events-none"
                        initial="initial"
                        animate={isActive ? "animate" : "initial"}
                        variants={activeNavAnimationLine2}
                      ></motion.div>
                    </div>
                  ) : (
                    <div className="cursor-pointer">
                      <motion.div className="line1 w-7 h-[2px] m-1 bg-slate-900 pointer-events-none"></motion.div>
                      <motion.div className="line2 w-7 h-[2px] m-1 bg-slate-900 pointer-events-none"></motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* BUTTON */}
              <Link
                href={"/"}
                className="bg-black text-custom-background px-4 py-3 rounded-full font-satoshiLight text-lg"
              >
                Get in Contact
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="mt-1">
                <Image alt="advert-1" src={Logo} width={90} />
              </div>

              <div
                className="cursor-pointer"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                {/* MENU */}
                <AnimatePresence>
                  {isActive ? (
                    <div className="burger">
                      <motion.div
                        className="line1 w-7 h-[2px] m-1 bg-slate-900 pointer-events-none"
                        initial="initial"
                        animate="animate"
                        variants={activeNavAnimationLine1}
                      ></motion.div>
                      <motion.div
                        className="line2 w-7 h-[2px] m-1 bg-slate-900 pointer-events-none"
                        initial="initial"
                        animate="animate"
                        variants={activeNavAnimationLine2}
                      ></motion.div>
                    </div>
                  ) : (
                    <div className="cursor-pointer">
                      <motion.div className="line1 w-7 h-[2px] m-1 bg-slate-900 pointer-events-none"></motion.div>
                      <motion.div className="line2 w-7 h-[2px] m-1 bg-slate-900 pointer-events-none"></motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* MENU */}
      <AnimatePresence>{isActive ? <Menu /> : ""}</AnimatePresence>
    </header>
  );
};

export default Navbar;
