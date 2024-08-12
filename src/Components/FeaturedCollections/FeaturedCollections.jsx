import React from "react";

const FeaturedCollections = () => {
  return (
    <div className="mt-4 align-items-center container">
      <div className="text-start mb-4">
        <h3>FEATURED COLLECTIONS</h3>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <div>
          <img
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_FC_Whites?resMode=sharp2&wid=420&hei=315"
            alt=""
            className="mx-2"
          />
        </div>
        <div>
          <img
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_FC_Black?resMode=sharp2&wid=420&hei=315"
            alt=""
            className="mx-2"
          />
        </div>
        <div>
          <img
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_FC_Checks?resMode=sharp2&wid=420&hei=315"
            alt=""
            className="mx-2"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollections;
