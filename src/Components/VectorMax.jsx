import React, { useRef, useEffect } from "react";
import { VectorMap } from "react-jvectormap";
import { usStates, getValue } from "../Util/Helpers";

const VectorMapp = ({ state }) => {
  const map = useRef();
  // const onToolTipShow = (e, el, code) => {
  //   let content = el.html();
  //   document.getElementsByClassName(".jvectormap-tip");
  //   return el.html(content);
  // };
  const handleClick = (e, countryCode) => {
    console.log("e, countryCode", countryCode);
    console.log("Haram Pai", state(getValue(usStates, countryCode)));
    //solving the lable stays on Every page
    setTimeout(() => {
      Array.from(document.getElementsByClassName("jvectormap-tip")).forEach(
        (el) => {
          el.style.display = "none";
        }
      );
    }, 100);
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
      // onToolTipShow={onToolTipShow}
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
      // onRegionTipShow={onToolTipShow}
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
