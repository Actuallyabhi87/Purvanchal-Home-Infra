"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Button from "../components/Button";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Buy",
      className: "text-white",
    },
    {
      text: "Your",
      className: "text-white",
    },
    {
      text: "dream",
      className: "text-white",
    },
    {
      text: "Land with",
      className: "text-white",
    },
    {
      text: "Purvanchal Home Infra.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] ">
      <p className="text-white dark:text-neutral-200 text-xs sm:text-base  ">
        Find your perfect plot—home begins here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Button />
      </div>
    </div>
  );
}
