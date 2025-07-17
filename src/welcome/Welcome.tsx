import React from 'react';
import './Welcome.scss';
import { pictures } from '../photos/Photos';

class Welcome extends React.Component {
  state = {
    volume: 'high', //'high' or 'off'
    //Make skills the new icon button
    //have the projects list stagger and display neatly just as text with the accompanying skill icons next to it or in it
    image: ''
  }

  audio = new Audio('dont-matter-to-me.mp3');

  navigateHome = () => {
    window.location.href = '/home';
  }

  playOpeningMusic = () => {
    this.audio.pause();
    this.audio.volume = 1;
    this.audio.play();
  }

  toggleVolume = () => {
    this.state.volume === 'high' ? this.setState({...this.state, volume: 'off'}) : this.setState({...this.state, volume: 'high'});
    this.audio.muted = !this.audio.muted;
  }

  runSlideshow = () => {
    let index = 0;
    setInterval(() => {
      if(index < pictures.length) {
        this.setState({...this.state, image: pictures[index]});
        index = index + 1;
      }
    }, 6000 / pictures.length); //Programmatically set the time based on number of pictures
  }

  componentDidMount(): void {
    window.setTimeout(this.runSlideshow, 10000);
  }

  render(): React.ReactNode {
    return (
      <>
        { window.setTimeout(this.navigateHome, 17000) }
        { window.setTimeout(this.playOpeningMusic, 0) }
        <div className="welcome-screen">
          <div className="big-white-text">This</div>
          <div className="big-white-text">is</div>
          <div className="welcome-nathan">Nathan Heckman</div>
          {
            this.state.image ? <img className="welcome-flashing-image" src={ this.state.image } alt=""></img> : <></>
          }
          <button className="skip-button btn btn-dark" onClick={ this.navigateHome }>Skip</button>
          <button className="btn volume-button" onClick={ this.toggleVolume }>
            <i className={"fa-solid fa-volume-" + this.state.volume}></i>
          </button>
        </div>
      </>
    );
  }
};

export default Welcome;
