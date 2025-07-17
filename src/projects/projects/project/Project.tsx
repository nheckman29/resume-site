import React from "react";
import './Project.scss';

interface Props {
    name: string,
    description: string[],
    skills: string[],
}

class Project extends React.Component<Props> {
    state = {
      direction: 'down' //'down' or 'up'
    };

    toggleDescription = () => {
      this.state.direction === 'down' ? this.setState({direction: 'up'}) : this.setState({direction: 'down'});
      console.log(this.state.direction)
    }

    render(): React.ReactNode {
      return (
        <>
          <div className="project-container">
              <div className="project-name-and-arrow" onClick={ this.toggleDescription }>
                <h3 className="project-name">{this.props.name}</h3>
                <div className="project-arrow">
                  <i className={"fa-solid fa-angle-" + this.state.direction}></i>
                </div>
              </div>
              { this.state.direction === 'up' ? 
                <ul className="project-description">
                {
                    this.props.description.map(bullet => <li className="project-bullet">{bullet}</li>)
                }
                </ul> : 
                <></> 
              } 
          </div>
        </>
      );
    }
  };
  
  export default Project;