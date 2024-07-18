import React from 'react';
import myImage from "./img1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <header className="header" id="home">
      <div className="container">
        <div className="infos">
          <h6 className="subtitle">Hello, I'm</h6>
          <h6 className="title">Abdelkarim Selmi</h6>
          <p>Backend Developer & Machine Learning</p>

          <div className="buttons pt-3">
            <button className="btn btn-primary rounded">HIRE ME</button>
              <a className="btn btn-dark rounded" href='https://drive.google.com/file/d/1_m82EVsno44tcOIbRqxMg_bBNS9Ndpr_/view?usp=drive_link'> <FontAwesomeIcon icon={faFileDownload} /> VIEW CV</a>

          </div>
        </div>
        <div className="img-holder">
          <img src={myImage} alt="Profile" />
        </div>
      </div>

      <div className="widget">
        <div className="widget-item">
          <a className="social-item" href="https://www.linkedin.com/in/abdelkarim-selmi">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="widget-item">
          <a className="social-item" href="https://github.com/abdelkarimse">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="widget-item">
          <a className="social-item" href="https://codeforces.com/profile/Fkarim">
          <FontAwesomeIcon icon={faLightbulb} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
