import React from "react";
import IconButton from "../shared/IconButton/IconButton";
import "./Contact.scss";

class Contact extends React.Component {
  state = {};

  render() {
    return (
      <>
          <div className="interactive-button-container">
            <IconButton iconPath="icons/phone.png" expandedText="770-843-8014"/>
            <IconButton iconPath="icons/email.png" expandedText="nheckman29@gmail.com"/>
          </div>
        <br></br>
        <a href="https://www.linkedin.com/in/nathan-heckman/">
          <img className="linkedin" src="linkedin.png" alt=""></img>
        </a>
        {/* Put the link to GitHub/BitBucket to view this code as well */}
        <br></br>
        <img className="iphone bounce" style={{ backgroundImage: "url('virginia-mountain.jpg')" }} src="Picture1.png" alt=""/>
        {/* Put a video in the phone that would be sick */}
      </>
      );
  }
};

export default Contact;
