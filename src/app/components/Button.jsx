"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../components/ui/moving-border";

export default function MovingBorderDemo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will set isClient to true once the component is mounted on the client-side
    setIsClient(true);
  }, []);

  return (
    <div>
      {/* Conditionally render the button to prevent hydration mismatch */}
      {isClient && (
        <Link href="tel:+918860762386">
          <Button
            borderRadius="1.75rem"
            className="bg-black dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Call Now
          </Button>
        </Link>
      )}
    </div>
  );
}
