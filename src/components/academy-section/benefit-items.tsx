import React from "react";

export const BenefitItems = () => (
  <div className="relative z-10 grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-12">
    <Item
      title="Hands-on learning"
      subtitle="Hands-on learning for job opportunities with potential hiring."
    />
    <Item
      title="Innovation-Driven Environment"
      subtitle="Crafting the ideas using the latest technology to build innovative projects."
    />
    <Item
      title="Industry-Relevant Skills"
      subtitle="Curriculum aligned with current tech industry demands."
    />
  </div>
);

const Item = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div>
      <h4 className="mb-3 flex text-txtTitle items-start text-lg font-bold md:text-xl">
        {title}
      </h4>
      <p className="text-base text-txtParagraph md:text-lg">{subtitle}</p>
    </div>
  );
};
