import React from "react";

const Header2 = () => {
  return (
    <div className="p-0 m-0">
      <div className="row m-0 align-items-center">
        <div className="col-6 text-start d-flex flex-row">
          <div className="col mb-2 mx-2 d-flex gap-2">
            <span className="fs-6">MORE BRANDS</span> |
            <div className="d-flex  flex-row flex-wrap">
              <span className="fs-6"> Delievering to</span>
              <a href="">Add delivery location</a>
            </div>
          </div>
        </div>
        <div className="header col-6 d-flex justify-content-between align-items-center">
          <div className="col mb-2">
            <span>
              <i className="fas fa-map-marker-alt"></i> STORES
            </span>
          </div>
          <div className="col mb-2">
            <span>
              <i className="fas fa-info-circle"></i> CONTACT US
            </span>
          </div>
          <div className="col mb-2">
            <span>
              <i className="fas fa-user"></i> LOG IN
            </span>
          </div>
          <div className="col mb-2">
            <span>
              <i className="fas fa-heart"></i>
            </span>
          </div>
          <div className="col mb-2">
            <span>
              <i className="fas fa-shopping-bag"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
