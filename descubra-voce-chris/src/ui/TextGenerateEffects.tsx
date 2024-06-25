"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={` ${idx > 6 ? "text-purple" : "uppercase text-transparent bg-gradient-to-r from-[#BFE5AC] to-[#88947F] bg-clip-text xs:text-[36px] xsm:text-[45px] sm:text-[48px] lg:text-[56px] leading-tight text-center font-title"
                } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className="uppercase text-transparent bg-gradient-to-r from-[#BFE5AC] to-[#88947F] bg-clip-text xs:text-[36px] xsm:text-[45px] sm:text-[48px] lg:text-[56px] leading-tight text-center font-title">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};