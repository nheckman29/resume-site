import React from "react";
import Project from "./project/Project";
import './Projects.scss';

interface P {
  name: string,
  skills: string[],
  description: string[]
}

interface Props {
  highlightSkills: Function,
  unhighlightSkills: Function
}

class Projects extends React.Component<Props> {
  
    projects: P[] = [ //Could add solar flare analysis and Pandas, Matplotlib, NumPy, Jupyter Notebook
      {
        name: 'Application Support AI Agent',
        description:[
          'Python, LangChain, LangGraph, and Ollama tool calling capable LLM, custom React front end',
          'Conduct research and development of application support AI agent utilizing Ollama, LangChain and LangGraph for custom tool calling, embedding corporate knowledge base documents and Jira tickets',
          'Streamline war room triage by providing agent with production database and knowledge base document vectorization/embedding for contextual analysis of production clients and issues',
        ],
        skills: ['Visual Studio Code', 'Postman', 'TypeScript', 'Tailwind', 'Flask', 'HTML', 'SQL', 'Jira', 'Python', 'LangChain', 'LangGraph', 'Ollama','React', 'Docker']
      },
      {
        name: 'Developer Portfolio Site',
        description: [
          'React, TypeScript, Bootstrap, HTML/CSS, deployed on Firebase',
          'Utilizes Amazon S3 and Amazon CloudFront to accelerate delivery of static images and web components'
        ],
        skills: ['React', 'TypeScript', 'Bootstrap', 'HTML', 'Firebase', 'Font Awesome', 'Sass', 'Visual Studio Code', 'Prettier', 'Trello', 'NPM', 'AWS']
      },
      {
        name: 'Payroll Innovation Application',
        description:[
          'Angular, TypeScript, Tailwind front end with Java Spring Boot API',
          'Utilized to troubleshoot live production issues in war rooms and expedite root cause discovery and issue resolution',
          'Provides customized client insights specific to production application support team'
        ],
        skills: ['Angular', 'TypeScript', 'Jasmine', 'Visual Studio Code', 'AG Grid', 'Sass', 'NPM', 'ESLint', 'Mockito', 'HTML', 'CSS', 'Font Awesome', 'Jira', 'BitBucket', 'MySQL', 'Tailwind', 'Java', 'Spring', 'Postman', 'IntelliJ']
      },
      {
        name: 'Computer Warranty Retrieval',
        description:[
          'Created a Python script to analyze raw CSV data and retrieve computer warranties',
          'Utilized available HP API, no user input required beyond CSV',
          'Drastically improved turnaround time for computer audit reports'
        ],
        skills: ['Visual Studio Code', 'Python', 'Excel', 'Postman']
      }
    ];

    highlightSkills = (skills: string[]) => {
      this.props.highlightSkills(skills);
    }

    unhighlightSkills = () => {
      this.props.unhighlightSkills();
    }

    render(): React.ReactNode {
      return (
        <>
        <div className="projects-container">
          {
            this.projects.map(
              project => 
              <div className="project-container" 
                   onMouseEnter={ () => { this.highlightSkills(project.skills) } } 
                   onMouseLeave={ () => { this.unhighlightSkills() }}> 
                <Project name={project.name} description={project.description} skills={project.skills} />
              </div>     
            )
          }
        </div>
        </>
      );
    }
  };
  
  export default Projects;