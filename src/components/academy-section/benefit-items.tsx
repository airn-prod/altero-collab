import React from "react";

export const BenefitItems = () => (
  <div className="relative z-10 grid grid-cols-1 gap-9 md:grid-cols-4 md:gap-12">
    <Item
      title="Hands-on learning"
      subtitle="Practical AI and tech development experience"
    />
    <Item title="AI Focus" subtitle="Training in the latest AI technologies." />
    <Item
      title="Innovation-Driven Environment"
      subtitle="Exposure to cutting-edge projects and technologies."
    />
    <Item
      title="Industry-Relevant Skills"
      subtitle="Curriculum aligned with tech industry demands"
    />
  </div>
);

const Item = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div>
      <h4 className="mb-1 flex text-txtTitle items-start text-lg font-bold md:text-xl">
        {title}
      </h4>
      <p className="text-base text-txtParagraph md:text-lg">{subtitle}</p>
    </div>
  );
};
