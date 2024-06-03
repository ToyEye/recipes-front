import React from "react";
import Section from "../Section";
import Text from "../Text";
import Heading from "../Heading";

import greeting from "@/app/lib/data/greeting.json";

const Description = () => {
  return (
    <Section>
      <div className="text-white text-sm md:text-base leading-5 ">
        <Heading
          text="Welcome to the Recipe Hub"
          tag="h1"
          className="underline mb-6 text-xl leading-4 tracking-wider md:text-2xl lg:text-3xl underline-offset-[6px] decoration-1"
        />
        <Text
          as="primary"
          text="Welcome to Recipe Hub, your ultimate destination for discovering, sharing, and enjoying a world of culinary delights! Whether you're a seasoned chef or a home cook, our platform is designed to inspire and support your culinary adventures."
          className="mb-4 text-sm md:text-base leading-5 "
        />

        <Heading text="What We Offer" className="mb-6" />
        <ul className="grid gap-4  grid-cols-1 md:grid-cols-2  mb-5 md:mb-8 ">
          {greeting.map(({ title, text }) => (
            <li
              key={title}
              className="border border-white rounded-lg px-4 py-6 md:last:col-span-2 overflow-hidden "
            >
              <Heading
                text={title}
                tag="h3"
                className="mb-4 uppercase tracking-wide"
              />
              <Text as="primary" text={text} />
            </li>
          ))}
        </ul>

        <Heading text="Happy cooking" tag="h3" className="mb-4" />

        <Heading text="The Recipe Hub Team" tag="h4" />
      </div>
    </Section>
  );
};

export default Description;
