"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const brands = [
  "Nike",
  "Adidas",
  "Puma",
  "Under Armour",
  "New Balance",
  "Reebok",
];

export default function BrandSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  const determineBestBrand = () => {
    // Simple deterministic logic: pick the brand with the longest name
    let best = brands[0];
    for (const brand of brands) {
      if (brand.length > best.length) {
        best = brand;
      }
    }
    return best;
  };

  const handleClick = () => {
    const best = determineBestBrand();
    setSelected(best);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <Button onClick={handleClick}>Determine Best Brand</Button>
      {selected && (
        <p className="text-xl font-semibold">
          The best clothing brand is: <span className="text-primary">{selected}</span>
        </p>
      )}
    </div>
  );
}
