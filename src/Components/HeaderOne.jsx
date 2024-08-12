import React from "react";
import "../index.css";
import Header2 from "./Header2";

const HeaderOne = () => {
  return (
    <div
      className="text-white text-center align-items-center w-100 h-100"
      style={{ background: "#384248" }}
    >
      <a>
        <div
          style={{ background: "rgb(0, 115, 74)", color: "rgb(255, 255, 255)" }}
        >
          <div>
            <p>
              <marquee>
                <div className="">
                  <p className="m-0 p-0 mt-1">
                    Get additional 10% off on your first purchase through app or
                    web. Use Code PEFIRST10. Download the Peter England App for
                    other exciting offers. T&amp;C applies.
                  </p>
                </div>
              </marquee>
            </p>
          </div>
        </div>
      </a>
      <Header2 />
    </div>
  );
};

export default HeaderOne;
