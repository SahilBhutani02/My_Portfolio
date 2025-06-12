import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faPython,
  faJsSquare,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { Loader } from "react-loaders";

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me!</h1>

          <p>
            I'm very ambitious full stack developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects skilled in
            front-end technologies , with expertise in Python and Django for 
            back-end development and with strong understanding of database.
          </p>
          <br/>
          <p>
            Proficient in creating responsive web pages implementing, and
            integrating RESTful APIs to enhance user interface and develop
            user-friendly applications with a focus on performance and code
            quality. An ambitious problem solver with a passion for online
            businesses who would join a team of like-minded developers. 
            Seeking an entry-level opportunity with an esteemed
            organization where I can utilize my skills and enhance learning in
            field of work.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
