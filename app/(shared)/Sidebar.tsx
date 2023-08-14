import React from "react";
import Subscribe from "./Subscribe";
import SocialLinks from "./Sociallinks";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs text-center font-bold">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">advert image</div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs text-center font-bold">
        About the Blog
      </h4>
      <div className="bg-wh-900 my-8">profile image</div>
      <h4 className=" py-3 px-5 text-wh-500 text-center  font-bold">
        Kristine bell
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
        similique magni quidem quisquam nostrum ex
      </p>
    </section>
  );
};

export default Sidebar;
