import { Link } from "react-router-dom";
import "./index.css";
import { Loader } from "react-loaders";
import Illustration from "../../assets/images/illustration.png";
import Resume from "../../assets/Resume/Sahil_Bhutani.pdf";
import { Button } from "reactstrap";

const Home = () => {
  const downloadResume = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Sahil_Bhutani.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("Resume download triggered");
  };

  return (
    <>
      <div className="home-page">
        <div className="text-zone">
          <p className="text">Hello, I'm</p>
          <h1 className="heading">SAHIL BHUTANI</h1>
          <p className="text">Full Stack Developer </p>
          <p className="text">
            10 months of experience as Frontend Developer Intern
          </p>
          <div className="btns">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <Button className="resume" onClick={downloadResume}>
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img className="right-logo" src={Illustration} alt="logo" />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
