import React from "react";
import "jsvectormap";
import "jsvectormap/dist/maps/canada.js";

//components
import BaseVectorMap from "./BaseVectorMap";

interface CanadaVectorMapProps {
  width?: string;
  height?: string;
  options?: any;
}

const CanadaVectorMap = ({ width, height, options }: CanadaVectorMapProps) => {
  return (
    <>
      <BaseVectorMap
        width={width}
        height={height}
        options={options}
        type="canada"
      />
    </>
  );
};

export default CanadaVectorMap;
