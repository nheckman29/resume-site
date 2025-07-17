import React from 'react';
import './BigPhoto.scss';

interface Props {
  imagePath: string
}

class BigPhoto extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <>
        <img className="big-photo" src={this.props.imagePath} alt="" />
      </>
    )
  }
}

export default BigPhoto;
