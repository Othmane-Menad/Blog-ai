import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam atque
            obcaecati amet quis totam. Rerum fugiat iste magni beatae
            recusandae.
          </p>
          <p>Blog of the Future All Right Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit amet</p>
          <p className="my-5">Lorem ipsum dolor </p>
          <p className="my-5">Lorem ipsum dolor </p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">(111)547-256-24</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
