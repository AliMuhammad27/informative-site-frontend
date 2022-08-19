import React, { useRef, useEffect } from "react";
import { VectorMap } from "react-jvectormap";

const VectorMapp = ({ orders, state }) => {
  console.log("ordersorders", orders);
  const map = useRef();

  const onToolTipShow = (e, el, code) => {
    const content2 = el.html();
    let productqty = [];
    console.log("e, el, code", e);
    orders?.length > 0 &&
      orders?.map((ord) => {
        // console.log('prd',ord);
        ord?.map((ord2) => {
          // console.log('prd2',ord2);
          if (ord2?.state == content2) {
            productqty.push("<br>" + ord2?.ord?.name + ": " + ord2?.ord?.qty);
          }
        });
      });
    console.log("productqty", productqty);
    let joinedproductqty = productqty.join();
    let content = el.html() + " " + joinedproductqty;
    console.log("content", typeof content);
    state(el.html() + " " + joinedproductqty);
    return el.html(content);
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
