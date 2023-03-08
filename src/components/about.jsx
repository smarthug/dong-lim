import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/honeywell_certification.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>동림 엔텍은</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
