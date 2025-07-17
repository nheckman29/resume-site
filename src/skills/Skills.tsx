import React from "react";
import Skill from "./skill/Skill";
import "./Skills.scss";

interface S {
  name: string,
  iconPath: string
}

interface Props {
  highlightedSkills: string[],
}

class Skills extends React.Component<Props> {
    skills: S[] = [
      {name: 'Angular', iconPath: 'icons/angular.png'},
      {name: 'Python', iconPath: 'icons/python.png'},
      {name: 'Java', iconPath: 'icons/java.png'},
      {name: 'React', iconPath: 'icons/react.png'},
      {name: 'JavaScript', iconPath: 'icons/javascript.png'},
      {name: 'TypeScript', iconPath: 'icons/typescript.png'},
      {name: 'Jasmine', iconPath: 'icons/jasmine.png'},
      {name: 'BitBucket', iconPath: 'icons/bitbucket.png'},
      {name: 'MySQL', iconPath: 'icons/mysql.png'},
      {name: 'Tableau', iconPath: 'icons/tableau.png'},
      {name: 'Visual Studio Code', iconPath: 'icons/vscode.png'},
      {name: 'IntelliJ', iconPath: 'icons/intellij.png'},
      {name: 'Eclipse', iconPath: 'icons/eclipse.png'},
      {name: 'SourceTree', iconPath: 'icons/sourcetree.png'},
      {name: 'Postman', iconPath: 'icons/postman.png'},
      {name: 'HTML', iconPath: 'icons/html.png'},
      {name: 'CSS', iconPath: 'icons/css.png'},
      {name: 'Mockito', iconPath: 'icons/mockito.png'},
      {name: 'Spring', iconPath: 'icons/spring.png'},
      {name: 'Bootstrap', iconPath: 'icons/bootstrap.png'},
      {name: 'NPM', iconPath: 'icons/npm.png'},
      {name: 'Toad', iconPath: 'icons/toad.png'},
      {name: 'Flask', iconPath: 'icons/flask.png'},
      {name: 'PostgreSQL', iconPath: 'icons/postgresql.png'},
      {name: 'Firebase', iconPath: 'icons/firebase.png'},
      {name: 'Ollama', iconPath: 'icons/ollama.png'},
      {name: 'Tailwind', iconPath: 'icons/tailwind.png'},
      {name: 'Heroku', iconPath: 'icons/heroku.png'},
      {name: 'Prettier', iconPath: 'icons/prettier.png'},
      {name: 'ESLint', iconPath: 'icons/eslint.png'},
      {name: 'Jira', iconPath: 'icons/jira.png'},
      {name: 'Trello', iconPath: 'icons/trello.png'},
      {name: 'AG Grid', iconPath: 'icons/ag-grid.png'},
      {name: 'Docker', iconPath: 'icons/docker.png'},
      {name: 'Font Awesome', iconPath: 'icons/font-awesome.png'},
      {name: 'Sass', iconPath: 'icons/sass.png'},
      {name: 'Excel', iconPath: 'icons/excel.png'},
      {name: 'SQL', iconPath: 'icons/sql.png'},
      {name: 'AWS', iconPath: 'icons/aws.png'},
      {name: 'LangChain', iconPath: 'icons/langchain.png'},
      {name: 'LangGraph', iconPath: 'icons/langgraph.png'},
    ];

    highlightSkills(): S[] {
      for(let skill of this.skills) {
        if(this.props.highlightedSkills.length) {
          if(this.props.highlightedSkills.includes(skill.name)) {
            document.getElementById(skill.name.split(' ')[0])!.classList.add('skill-container-selected');
          }
          else {
            document.getElementById(skill.name.split(' ')[0])!.classList.add('skill-container-translucent');
          }
        }
      }
      return this.skills;
    }

    render(): React.ReactNode {
      return (
        <>
        <div className="skills-container">
          {
            this.highlightSkills().map(
              skill => <Skill id={skill.name.split(' ')[0]} iconPath={skill.iconPath} name={skill.name} />
            )
          }
        </div>
        </>
      );
    }
  };
  
  export default Skills;
  