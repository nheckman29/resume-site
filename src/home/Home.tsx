import React from "react";
import { TypeAnimation } from "react-type-animation";
import IconButton from "../shared/IconButton/IconButton";
import "./Home.scss";

class Home extends React.Component {
  state = {
    note: ""
  }

  render() {
    return (
      <>
      <div className="home-container">
        <div className="home-left">
          <div className="tagline-container">
            <TypeAnimation 
              className="tagline"
              sequence={[
                'Hello! My name is Nathan. I am a software developer.', //Picture while holding computer and coffee
                1000,
                'Hello! My name is Nathan. I am a follower of Christ.', //Picture holding bible
                1000,
                'Hello! My name is Nathan. I am a Georgia State alum.', //Picture in graduation clothes or just the cap
                1000,
                'Hello! My name is Nathan. I am a drumset enthusiast.', //Picture holding drumsticks
                1000
              ]}
              speed={25}
              repeat={Infinity}
            />
          </div>
          <br></br>
          <h5>I enjoy spending my time catching up on the newest technology trends, trying new food, playing drumset, and serving at my church. I am currently open to full-stack developer positions and would love to connect!</h5>
          <div className="interactive-button-container">
            <IconButton iconPath="icons/phone.png" expandedText="770-843-8014"/>
            <IconButton iconPath="icons/email.png" expandedText="nheckman29@gmail.com"/>
          </div>
        </div>
        <div className="home-right">
          <img className="home-nathan" src="nathan.jpg" alt=""></img>
        </div>
      </div>
      </>
    );
  }
}

export default Home;
