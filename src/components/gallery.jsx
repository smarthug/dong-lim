import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>제품</h2>
          {/* <a href="catalog.pdf" target="_blank" rel="noreferrer">
            <h3>종합 카탈로그 다운로드</h3>

          </a> */}
          <p>
            제품 문의 02-357-1484
          </p>
          <a
            href="https://bafybeidrpahfmsxlodlge75zadunscpysc52bgpzdl7p5lhbckwlkw3eeq.ipfs.nftstorage.link//"
            className="btn btn-custom btn-lg page-scroll"
            target="_blank"
            rel="noreferrer"
          >
            제품 카탈로그 다운로드
          </a>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                    manualLink={d.manualLink}
                    description={d.description}
                  />
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
