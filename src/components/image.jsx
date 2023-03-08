import React from "react";

export const Image = ({ title, smallImage, manualLink, description }) => {
  // console.log(manualLink);
  // console.log(description);
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <h4>

          {title}
        </h4>

        <a target="_blank" rel="noreferrer" href={manualLink} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}

            </h4>
            <div>
              {description}
            </div>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
