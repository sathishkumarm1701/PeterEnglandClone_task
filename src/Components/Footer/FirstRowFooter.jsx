import React from "react";

const FirstRowFooter = () => {
  return (
    <div className="footer_firstrow">
      <div className="main-conteriner">
        <div className="footer_icon">
          <span className="span_cust">
            <img
              className="icon_cust"
              alt="FREE SHIPPING"
              title="FREE SHIPPING"
              src="https://s7ap1.scene7.com/is/image/adityabirlafashion/p-hicon-delivery_2x?resMode=sharp2&amp;fmt=png8-alpha&amp;wid=90&amp;hei=90"
            />
          </span>
          <span>FREE SHIPPING</span>
        </div>
        <div className="footer_icon">
          <span className="span_cust">
            <img
              className="icon_cust"
              alt="RETURN WITHIN 15 DAYS"
              title="RETURN WITHIN 15 DAYS"
              src="https://s7ap1.scene7.com/is/image/adityabirlafashion/pe-hicon-return?resMode=sharp2&amp;fmt=png8-alpha&amp;wid=90&amp;hei=90"
            />
          </span>
          <span>RETURN WITHIN 15 DAYS</span>
        </div>
        <div className="footer_icon ">
          <span className="span_cust">
            <img
              className="icon_cust"
              alt="EXPRESS DELIVERY IN STORE MODE"
              title="EXPRESS DELIVERY IN STORE MODE"
              src="https://s7ap1.scene7.com/is/image/adityabirlafashion/p-eicon-fastdelivery_2x?resMode=sharp2&amp;fmt=png8-alpha&amp;wid=90&amp;hei=90"
            />
          </span>
          <span className="text-center">EXPRESS DELIVERY IN STORE MODE</span>
        </div>
      </div>
    </div>
  );
};

export default FirstRowFooter;
