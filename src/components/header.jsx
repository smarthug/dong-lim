import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">

                <h1>

                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p
                  style={{

                    // height: "10px"
                  }}

                >
                  {/* {props.data ? props.data.paragraph : "Loading"} */}
                
                </p>
                <a
                  href="https://bafybeih37flfnk7uwowbikda3diuzg5kixyq7fyg4ewjzhrxh42soxd724.ipfs.nftstorage.link/"
                  className="btn btn-custom btn-lg page-scroll"
                  target="_blank"
                  rel="noreferrer"
                >
                  제품 카탈로그 다운로드
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
