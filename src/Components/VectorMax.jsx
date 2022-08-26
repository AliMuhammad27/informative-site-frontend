import React, { useRef, useEffect } from "react";
import { VectorMap } from "react-jvectormap";
import { usStates, getValue } from "../Util/Helpers";

const VectorMapp = ({ state }) => {
  console.log("States", usStates);
  const map = useRef();
  const onToolTipShow = (e, el, code) => {
    console.log("e, el, code", e);
    let content = el.html();
    console.log("content", typeof content);
    document.getElementsByClassName(".jvectormap-tip").style.display = "none";
    return el.html(content);
  };
  const handleClick = (e, countryCode) => {
    console.log("e, countryCode", e, countryCode);
    console.log(state(getValue(usStates, countryCode)));
  };
  return (
    <VectorMap
      map={"us_aea"}
      backgroundColor="#FFFF"
      markerStyle={{
        initial: {
          fill: "#FFFF",
          stroke: "#383f47",
        },
      }}
      onRegionTipShow={onToolTipShow}
      onRegionClick={handleClick}
      series={{
        markers: [
          {
            attribute: "r",
            scale: [5, 20],
            values: [60, 6, 54],
            normalizeFunction: "polynomial",
          },
        ],
      }}
      regionStyle={{
        initial: {
          fill: "#0096FF",
        },
        hover: {
          fill: "#0000FF",
        },
      }}
      ref={map}
      containerStyle={{
        width: "100%",
        height: "100%",
      }}
      containerClassName="map"
    />
  );
};

export default VectorMapp;
