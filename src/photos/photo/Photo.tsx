import React from 'react';
import './Photo.scss';

interface Props {
  id?: string
  imagePath: string;
  onClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
}

class Photo extends React.Component<Props> {

  render(): React.ReactNode {
    return (
      <>
        <img 
          id={this.props.id}
          className="gallery" 
          src={this.props.imagePath} alt="" 
          onClick={this.props.onClick} 
        />
      </>
    )
  }
}

export default Photo;
