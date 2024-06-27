import Image from "next/image";
import React from "react";

export const PortofolioItems = () => (
  <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-12">
    <Item
      imageSrc="/beliesim-image.jpg"
      title="BeliESIM"
      subtitle="We provide eSIM with coverage 150+ countries worldwide for traveler who trip abroad with instant data-connection to enhance traveling experience more flexible. With Beliesim allow you to create perfect data plan that follow your needs and activities."
    />
    <Item
      imageSrc="/chaca-market-image.jpg"
      title="Chaca Market"
      subtitle="Chaca Market is a community-based e-commerce platform that provides you an easier way to buy and sell secondhand goods, connect better with your community, and find part-time jobs. All within your neighborhood and with those you trust!"
    />
  </div>
);

const Item = ({
  imageSrc,
  title,
  subtitle,
}: {
  imageSrc: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <Image
        src={imageSrc}
        width={800}
        height={800}
        alt="portofolio-image"
        className="mb-10 rounded-xl"
      />
      <h3 className="mb-6 flex text-txtTitle items-start text-xl md:leading-[42px] md:text-[28px]">
        {title}
      </h3>
      <p className="text-txtParagraph text-[#686767]">{subtitle}</p>
    </div>
  );
};
