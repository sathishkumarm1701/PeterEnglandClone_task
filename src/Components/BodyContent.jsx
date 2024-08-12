import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const BodyContent = () => {
  return (
    <div>
      <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={clickHandler}
              title={labelPrev}
              style={{
                position: "absolute",
                top: "50%",
                left: 15,
                zIndex: 2,
                background: "none",
                border: "none",
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ❮
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
            <button
              type="button"
              onClick={clickHandler}
              title={labelNext}
              style={{
                position: "absolute",
                top: "50%",
                right: 15,
                zIndex: 2,
                background: "none",
                border: "none",
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ❯
            </button>
          )
        }
      >
        <div>
          <img
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_HB_Denim_D?resMode=sharp2&wid=1600&hei=650"
            alt="Denim"
          />
        </div>
        <div>
          <img
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE-HB-Independence-August-D?resMode=sharp2&wid=1600&hei=650"
            alt="Independence"
          />
        </div>
        <div>
          <img
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE-HB-Zodiac-August-D?resMode=sharp2&wid=1600&hei=650"
            alt="Zodiac"
          />
        </div>
        <div>
          <img
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE-HB-Gentlemens-League-August-D?resMode=sharp2&wid=1600&hei=650"
            alt="Gentlemen's League"
          />
        </div>
        <div>
          <img
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE_D_Performbanner?resMode=sharp2&wid=1600&hei=650"
            alt="Performance Banner"
          />
        </div>
        <div>
          <img
            src="https://s7ap1.scene7.com/is/image/adityabirlafashion/PE-HB-Yacht-August-D?resMode=sharp2&wid=1600&hei=650"
            alt="Yacht"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default BodyContent;
