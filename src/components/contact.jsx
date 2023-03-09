// import { useState } from "react";
// import emailjs from "emailjs-com";
import React from "react";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };
export const Contact = (props) => {
  // const [{ name, email, message }, setState] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };
  // const clearState = () => setState({ ...initialState });

  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   // console.log(name, email, message);
  //   // emailjs
  //   //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
  //   //   .then(
  //   //     (result) => {
  //   //       console.log(result.text);
  //   //       clearState();
  //   //     },
  //   //     (error) => {
  //   //       console.log(error.text);
  //   //     }
  //   //   );
  // };
  return (
    <div style={
      {
        width: "100%",
      }
    }>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>구매 상담</h2>
                <a
                  href="https://bafybeih37flfnk7uwowbikda3diuzg5kixyq7fyg4ewjzhrxh42soxd724.ipfs.nftstorage.link/"
                  className="btn btn-custom btn-lg page-scroll"
                  target="_blank"
                  rel="noreferrer"
                >
                  제품 카탈로그 다운로드
                </a>{" "}
                <p>
                  문의는 02-357-1484 또는 이메일 tr0302@hanmail.net 로 연락 바랍니다.
                </p>
              </div>

            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-fax"></i> Fax
                </span>{" "}
                {props.data ? props.data.fax : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  {/* <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li> */}
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 동림엔텍(주) TongRim Trading All Rights Reserved.
            대표이사: 최봉훈
            사업자번호: 102-81-07690
            {/* <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};
