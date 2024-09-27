"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { testimonials } from "../data/testimonial"; // Ensure this path is correct

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[25rem] rounded-md flex flex-col antialiased bg-gray-800 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {testimonials && testimonials.length > 0 ? (
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      ) : (
        <p className="text-white">No testimonials available.</p>
      )}
    </div>
  );
}
