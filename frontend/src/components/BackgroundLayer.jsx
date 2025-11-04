import React from "react";
import Hero from "../Curser/Hero";
import StarField from "./StartField";
import GridLines from "./GridLines";

const BackgroundLayer = () => {
  return (
    <div className="fixed inset-0 z-0">
       <Hero />
      <StarField
        density="high"
        showComets={true}
        cometCount={5}
        isDark={true}
      />
      <GridLines
        strokeColor="#00ffff"
        horizontalLines={25}
        verticalLines={25}
        strokeOpacity={0.15}
        strokeWidth={0.5}
        speed={8}
        opacity={0.3}
      />
    </div>
  );
};

export default BackgroundLayer;