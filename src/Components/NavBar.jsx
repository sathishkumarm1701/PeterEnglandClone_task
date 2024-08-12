import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderOne from "./HeaderOne";
{
}

const NavBar = () => {
  return (
    <header>
      <HeaderOne />
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-2 d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <img
                style={{ marginLeft: "50%" }}
                src="https://imagescdn.peterengland.com/img/app/brands/superapp/Icons/header_brand_logo_PE.png?auto=format"
                alt="PE"
              />
            </a>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          {/* Navigation and Search */}
          <div className="col-10">
            <div
              className="collapse navbar-collapse align-items-center d-flex flex-row"
              id="navbarNav"
            >
              <ul className="navbar-nav d-flex flex-row align-items-center justify-content-between w-100">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    MEN
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CRICKET
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WEDDING STORE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    NEW ARRIVALS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    KIDS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CUSTOMISE
                  </a>
                </li>
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search T-shirts"
                    // enterkeyhint="search"
                  />
                </div>
                <div
                  className="text-wrap rounded-pill bg-black text-white text-align-center mx-1 d-flex align-items-center justify-content-around"
                  style={{ padding: "5px 10px", width: "250px" }}
                >
                  <div>
                    <img
                      style={{
                        height: "24px",
                        width: "24px",
                        backgroundPosition: "3.5% 43.75%",
                        backgroundSize: "cover",
                      }}
                      src="https://imagescdn.peterengland.com/img/app/brands/superapp/Icons/icon_sprite.png"
                      alt="Delivery Icon"
                    />
                  </div>
                  <div className="text-left">
                    <p
                      className="mb-0"
                      style={{ fontSize: "14px", fontWeight: "bold" }}
                    >
                      EXPRESS DELIVERY
                    </p>
                    <span
                      className="store text-green"
                      style={{ fontSize: "12px" }}
                    >
                      Select your nearest store
                    </span>
                  </div>
                </div>

                <HeaderLogo />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
