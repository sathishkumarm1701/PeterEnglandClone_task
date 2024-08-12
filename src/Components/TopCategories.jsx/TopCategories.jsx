import React from "react";
import FeaturedCollections from "../FeaturedCollections/FeaturedCollections";

const TopCategories = () => {
  return (
    <div className="align-items-center text-center mt-3">
      <h3>TOP CATEGORIES</h3>
      <div className="d-flex flex-row justify-content-center">
        <div className="mx-2">
          <img
            className="rounded-circle"
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_12_Footwear?resMode=sharp2&wid=200&hei=200"
            alt="shoes"
          />
        </div>
        <div className="mx-2">
          <img
            className="rounded-circle"
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_11_Jeans?resMode=sharp2&wid=200&hei=200"
            alt="jeans"
          />
        </div>
        <div className="mx-2">
          <img
            className="rounded-circle"
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_15_Shirts?resMode=sharp2&wid=200&hei=200"
            alt="shirts"
          />
        </div>
        <div className="mx-2">
          {" "}
          <img
            className="rounded-circle"
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_11_Trousers?resMode=sharp2&wid=200&hei=200"
            alt="Trousers"
          />
        </div>
        <div className="mx-2">
          {" "}
          <img
            className="rounded-circle"
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_TC_7?resMode=sharp2&wid=200&hei=200"
            alt="belts"
          />
        </div>
        <div className="mx-2">
          {" "}
          <img
            className="rounded-circle"
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Topcategories_11_T_Shirts?resMode=sharp2&wid=200&hei=200"
            alt="tshirts"
          />
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center mt-4">
        <div className="col-5 row me-1">
          <img
            className="rounded"
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Platinum_Chinos?resMode=sharp2&wid=964&hei=723"
            alt="fashion"
          />
        </div>
        <div className="col-5 row">
          <img
            className="rounded-top"
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Platinum_Wedding?resMode=sharp2&wid=964&hei=723"
            alt="wedding"
          />
        </div>
      </div>
      <FeaturedCollections />
    </div>
  );
};

export default TopCategories;
