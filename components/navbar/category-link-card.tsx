import Image from "next/image";
import React from "react";

type CategoryLinkCardProps = {
  name: string;
  image: string;
};

const CategoryLinkCard = ({ name, image }: CategoryLinkCardProps) => {
  return (
    <div className="category_link_card group/category_link_card ">
      <div className=" category_link_card_bg group-hover/category_link_card:scale-150 ">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg "
        />
      </div>
      <div className="blur-bg group-hover/category_link_card:bg-transparent  rounded-lg"></div>
      <div className="z-10 flex flex-col items-center justify-center bg-primary rounded-sm text-white ">
        <h3 className="text-[12px] font-mont p-1 ">{name}</h3>
      </div>
      
    </div>
  );
};

export default CategoryLinkCard;
