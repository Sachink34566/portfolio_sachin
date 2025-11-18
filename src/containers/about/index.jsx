import React from "react";
import PageHeader from "../../components/pageheader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './styles.css';
import {DiApple,DiAndroid} from'react-icons/di';
import {FaDev,FaDatabase} from'react-icons/fa';
const personalDetails=[
  {
    label:"Name",
    value:"Sachin Kumar",
  },
  {
    label:"Age:",
    value:"25"
  },
  {
    label: "Address",
    value: "Bengaluru, India",
  },
  {
    label:"Email:",
    value:"sachinkumar98504@gmail.com"
  },
  {
    label:"Contact:",
    value:"6203841331"
  }
];

const jobSummary = 
"Full Stack Developer with hands-on experience in building scalable web and mobile applications using Angular, React, .NET Core, ADO.NET, SQL Server, and PostgreSQL. Skilled in developing responsive UIs, designing RESTful APIs, implementing microservices, and integrating third-party services. Strong understanding of both front-end and back-end architecture with expertise in Angular 18, TypeScript, JavaScript, HTML, CSS/SCSS, and mobile development using Capacitor and Cordova. Experienced in document management systems, statement configuration modules, authentication flows, and performance optimization. Adept at collaborating with stakeholders, analyzing requirements, and delivering high-quality, user-focused solutions across web and mobile platforms.";


const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
        <div className="about_content">
          <div className="about_pernalwrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{transform:"translateX(-900px"}}
            end={{transform:"translateY(0px"}}
            >
          <h3>Full Stack Developer</h3>
          <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{transform:"translateX(1500px"}}
            end={{transform:"translateY(0px"}}
            >
          <h3 className="personInformation">Personal Information</h3>
          <ul>
            {
              personalDetails.map((item,i)=>(
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))
            }
          </ul>
          </Animate>
          </div>
          <div className="about_servicewrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{transform:"translateX(600px"}}
            end={{transform:"translateY(0px"}}
            >
            <div className="about_servicewrapper_inner">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)"></FaDev>
            </div>
            <div>
            <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <DiApple size={60} color="var(--yellow-theme-main-color)"/>
              </div> 
            </div>
            </Animate>
          </div>
        </div>   
    </section>
  );
};
export default About;
