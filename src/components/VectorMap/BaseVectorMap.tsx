import React, { useEffect, useState } from "react";

interface BaseVectorMapProps {
  width?: string;
  height?: string;
  options?: any;
  type: string;
}

const BaseVectorMap = ({
  width,
  height,
  options,
  type,
}: BaseVectorMapProps) => {
  const selectorId = type + new Date().getTime();
  const [map, setMap] = useState();

  useEffect(() => {
    if (!map) {
      // create jsvectormap
      const map = new (window as any)["jsVectorMap"]({
        selector: "#" + selectorId,
        map: type,
        ...options,
      });

      setMap(map);
    }
  }, [selectorId, map, options, type]);

  return (
    <>
      <div id={selectorId} style={{ width: width, height: height }}></div>
    </>
  );
};

export default BaseVectorMap;
