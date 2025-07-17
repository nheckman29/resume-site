import React, { BaseSyntheticEvent } from 'react';
import BigPhoto from './big-photo/BigPhoto';
import Photo from './photo/Photo';
import './Photos.scss';

export const pictures = [ //Find a way to get these dynamically from a folder
    'nathan.png', 'adp-group.png', 'connect.png', 'nathan.jpg',
    'jeni.png', 'kaleb.png','amar-atlutd.jpg', 'maddie-coldplay.jpg',
    'maddie-eltonjohn.jpg', 'alex-mexican.jpg', 'maddie-zach-1975.jpg',
    'virginia-camping.jpg', 'wedding-dance.jpg', 'nathan_maddie_aidan.jpg',
    'adp-team.jpg', 'aidan.jpg', 'aso.jpg', 'birthday_dad.jpg', 'easter.jpg',
    'jeep.jpg', 'out_west.jpg', 'puerto_rico.jpg', 'rocky_mountain.jpg', 'wedding.jpg'
];

class Photos extends React.Component {
  state = {
    bigImagePath: ""
  }

  pictures = pictures;

  handleClick = (data: BaseSyntheticEvent) => {
    this.setState({bigImagePath: data.target.src});
    const picture = document.getElementById('nathan.png');
    picture!.style.border = '';
  }

  render(): React.ReactNode {
    const bigImagePath = this.state.bigImagePath;
    return (
      <>
        {
          this.pictures.map(
            picture => <Photo id={picture} imagePath={picture} onClick={this.handleClick.bind(this)} />
          )
        }
        <br></br>
        {
          bigImagePath.length > 0 ? <BigPhoto imagePath={bigImagePath}/> : <div></div>
        }
      </>
    );
  }
};

export default Photos;
