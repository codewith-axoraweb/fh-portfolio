import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import ExperienceShowcaseListItem, {
  type ExperienceShowcaseListItemProps,
} from "@/components/experience/experience-showcase-list-item";

export interface ExperienceShowcaseListProps {
  title: string;
  details: ExperienceShowcaseListItemProps[];
}

export default function ExperienceShowcaseList(
  props: ExperienceShowcaseListProps,
) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section className="mx-auto my-16 max-w-7xl px-6 sm:my-20 sm:px-10 md:my-24 md:px-20">
      <h2 className="mb-10 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-3xl font-bold text-transparent xs:text-4xl sm:text-6xl md:mb-14 md:text-8xl">
        {props.title}
      </h2>

      <div
        ref={ref}
        className="relative mx-auto w-full md:w-[80%]"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-5 h-full w-[5px] origin-top rounded-lg bg-gradient-to-r from-blue-500 to-blue-800"
        />

        <ul className="ml-4 w-full">
          {props.details.map((detail, index) => (
            <ExperienceShowcaseListItem
              key={index}
              {...detail}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}