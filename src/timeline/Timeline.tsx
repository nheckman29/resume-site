import React from "react";
import "./Timeline.scss";

export interface Event {
  title: string;
  company: string;
  dates: string;
  details: string[],
  iconPath: string,
  years: string; //Have this computed based on startDate and endDate
  offset: string; //Used to properly place the event on the timeline
  /* 
  The beginning of time for the offset is the Georgia State job - December 2019
  */
}
/* Redesign the page to be floating bubbles with the logo for each thing in it
   Same information, but can add without relying on the timeline
*/

class Timeline extends React.Component {
  event: Event = {
    title: '',
    company: '',
    dates: '',
    details: [],
    iconPath: '',
    years: '',
    offset: ''
  };
  
  state = {
    selectedEvent: this.event
  };

  handleHover = (event: Event) => {
    this.setState({selectedEvent: event});
    for(let i = 0; i < this.events.length; i++) { 
      if(i !== this.events.indexOf(event)) {
        document.getElementById('' + this.events.indexOf(this.events[i]))!.style.opacity = '0.2'; 
      }
    }
  }
  
  leaveHover = (event: Event) => {
    //this.setState({selectedEvent: this.event});
    for(let i = 0; i < this.events.length; i++) {
      document.getElementById('' + this.events.indexOf(this.events[i]))!.style.opacity = '1';
    }
  }
  
  events: Event[] = [
    {
      title: "Associate Application Developer",
      company: "ADP",
      dates: "August 2022 - August 2024",
      details: [
        'Integrate custom Angular components and logic on payroll innovation team, review and markup peer code',
        'Manipulate MySQL database to troubleshoot live production issues, participate in issue war rooms',
        'Began role in six-week bootcamp, designed online W-2 completion single-page application with React in teams, dynamically allocated user roles, interacted with Spring Boot API and Toad database',
        'Presented final project to professional developers and corporate leadership, advocated for integration of our product into existing employee onboarding process and explain high-level design and development'
      ],
      iconPath: "icons/adp.png",
      years: "2",
      offset: "3-2"
    },
    {
      title: "IT Infrastructure Intern",
      company: "Neenah",
      dates: "October 2021 - June 2022",
      details: [
        'Provided live troubleshooting and auditing of user computers and network equipment, automated employee laptop configurations and computer warranty retrieval with PowerShell and Python',
        'Maintained company group policy and Active Directory, surveyed Wi-Fi reachability and access',
        'Coordinated global cybersecurity training initiative, lead administration of newly integrated Cisco Umbrella cloud security platform'
      ],
      iconPath: "icons/neenah.png",
      years: "0-9",
      offset: "0"
    },
    {
        title: "Software Engineer",
        company: "ADP",
        dates: "August 2024 - Present",
        details: [
          'Promoted to new role after annual performance review with heightened responsibility, continue prior tasks',
          'Act as primary on-call engineer leading critical incident response for organization application support team',
          'Drive microservice observability dashboard and metrics discussions, function as point of contact for new production issue root causes and resolutions',
          'Develop innovative solutions to reoccurring issues and automate effort'
        ],
        iconPath: "icons/adp.png",
        years: "0-3",
        offset: "5-2"
      },
    {
      title: "Bachelor of Science in Computer Science",
      company: "Graduated",
      dates: "May 2022",
      details: [
        'Graduated from Georgia State University in May 2022',
        '3.74 GPA',
        'Received three offers for employment before graduation'],
        iconPath: "icons/gsu.png",
        years: "0-1",
        offset: "2-10"
      }
    ];

    render(): React.ReactNode {
      return (
        <>
      {/* <div className="timeline-cursor-container">
        <img className="timeline-cursor" src="icons/cursor.png" alt=""></img>
        <h3>to show detail</h3>
      </div>
      <div className="timeline-container">
        <ul className="timeline-events">
          {
            this.events.map(event => {
              return (
                <TimelineEvent id={this.events.indexOf(event)} event={event} handleHover={this.handleHover} leaveHover={this.leaveHover} />
              )
              })
            }
        </ul>
        <ul className="timeline-years">
          <li>2021</li>
          <li>2022</li>
          <li>2023</li>
          <li>2024</li>
          <li>2025</li>
          <li>2026</li>
        </ul>
      </div> */}
      <br></br>
        <img 
          id="ccp"
          className="aws"
          src="ccp.png"
          onMouseOver={() => {
            document.getElementById('ccp')!.style.scale="1.05";
          }}
          onMouseLeave={() => {
            document.getElementById('ccp')!.style.scale="1";
          }}
          alt="">
        </img>
        <img 
          id="cda"
          className="aws"
          src="cda.png"
          onMouseOver={() => {
            document.getElementById('cda')!.style.scale="1.05";
          }}
          onMouseLeave={() => {
            document.getElementById('cda')!.style.scale="1";
          }}
          alt="">
        </img>
        <img 
          id="csa"
          className="aws"
          src="csa.png"
          onMouseOver={() => {
            document.getElementById('csa')!.style.scale="1.05";
          }}
          onMouseLeave={() => {
            document.getElementById('csa')!.style.scale="1";
          }}
          alt="">
        </img>
        <img 
        id="csis" 
        className="csis" 
        src="csis.png" 
        onMouseOver={() => {
          document.getElementById('csis')!.style.scale="1.02";
        }}
        onMouseLeave={() => {
          document.getElementById('csis')!.style.scale="1";
        }}
        alt="">
        </img> 
      </>
    );
  }
}

export default Timeline;
