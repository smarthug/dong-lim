import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>

          <img src="img/logo.jpg" alt="logo" />
        
          <a className="navbar-brand page-scroll" href="#page-top">
            {/* 동림엔텍(주) */}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">

            <li>
              <a href="#portfolio" className="page-scroll">
                제품
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                연락처
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
