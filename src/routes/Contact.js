import React from "react";
import "css/contact.css";
import contactimg from "img/pictures/contact.png";

const contact = () => {
  return (
    <div className="container">
      <div className="c-flex">
        <div className="c-left">
          <p className="c-title">Contact</p>
          <div className="c-details">
            <p>주소 | [10881] 경기도 파주시 회동길 210</p>
            <p>전화 | 031 955 1936, 2560</p>
            <p>팩스 | 031 955 2557</p>
            <p>독자의견 | bookpot@hanmail.net</p>
          </div>
        </div>
        <div className="c-right">
          <img src={contactimg} alt="contact" />
        </div>
      </div>
    </div>
  );
};

export default contact;
