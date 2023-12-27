import React from "react";
import Link from "next/link";
import Image from "next/image";

type card = {
  title: string;
  type: string;
  date: string;
  image: string;
};

type Props = {
  data: card;
};

const Card = ({ data }: Props) => {
  const { image, type, title, date } = data;
  return (
    <div className="md:max-w-md border-2 rounded-xl mt-5">
      <Link className="basis-full hover:opacity-70 " href="/">
        <div className={`relative mb-4 h-64 `}>
          <Image
            className="rounded-xl"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="tech"
            src={image}
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1 className="font-ivyMode text-4xl m-2 text-custom-grey">{title}</h1>
        <div className="flex justify-between items-center m-6 text-base text-custom-grey">
          {/* TYPE */}
          <h2>{type}</h2>
          {/* DATE */}
          <h2>{date}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
