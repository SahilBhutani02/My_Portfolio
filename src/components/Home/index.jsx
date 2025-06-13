import { Link } from "react-router-dom";
import "./index.css";
import { Loader } from "react-loaders";
import Illustration from "../../assets/images/illustration.png";
import Resume from "../../assets/Resume/Sahil_Bhutani.pdf";
import { Button } from "reactstrap";

const Home = () => {
  const downloadResume = () => {
    try {
      // Create a temporary anchor element to trigger download
      const link = document.createElement("a");
      link.href = Resume;
      link.download = "Sahil_Bhutani_Resume.pdf"; 
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer'); 
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("Resume download triggered successfully");
      
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <p className="text">Hello, I'm</p>
          <h1 className="heading">SAHIL BHUTANI</h1>
          <p className="text">Full Stack Developer</p>
          <p className="text">
            10 months of experience as Frontend Developer Intern
          </p>
          <div className="btns">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <Button 
              className="resume" 
              onClick={downloadResume}
              aria-label="Download Sahil Bhutani's Resume"
            >
              Download Resume
            </Button>
          </div>
        </div>
        <div className="image-zone">
          <img 
            className="image" 
            src={Illustration} 
            alt="Professional illustration of Sahil Bhutani" 
            loading="lazy"
          />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;