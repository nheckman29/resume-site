import React from 'react';
import Skills from '../skills/Skills';
import Projects from './projects/Projects';
import './ProjectsWithSkills.scss';

interface Props {

}

class ProjectsWithSkills extends React.Component<Props> {
  state = {
    highlightedSkills: [],
    unhighlightSkills: Function
  };

  highlightSkills = (skills: string[]) => {
    this.setState({ highlightedSkills: skills });
  }

  unhighlightSkills = () => {
    let elements = document.getElementsByClassName('skill-container-selected');
    while(elements.length) {
      elements[0].classList.remove('skill-container-selected');
    }
    elements = document.getElementsByClassName('skill-container-translucent');
    while(elements.length) {
      elements[0].classList.remove('skill-container-translucent');
    }
  }

  render() {
    return (
      <>
        <div className="projects-cursor-container">
          <img className="timeline-cursor" src="icons/cursor.png" alt=""></img>
          <h3>to show skills utilized</h3>
        </div>
        <div className="projects-skills-container">
          <Projects highlightSkills={ this.highlightSkills } unhighlightSkills={ this.unhighlightSkills }/>
          <Skills highlightedSkills={ this.state.highlightedSkills } />
        </div>
      </>
  );
  }
};

export default ProjectsWithSkills;
