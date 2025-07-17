import React from "react";
import './Skill.scss';

interface Props {
    id: string,
    name: string,
    iconPath: string
    //Add a highlight effect prop for each project to show the skills used. Use the skill-container-selected CSS then
}

class Skill extends React.Component<Props> {
    render(): React.ReactNode {
      return (
        <>
        <div id={this.props.id} className="skill-container">
            <img className="skill-icon" src={this.props.iconPath} alt="" />
            <span className="skill-name">{this.props.name}</span>
        </div>
        
        </>
      );
    }
  };
  
  export default Skill;
  