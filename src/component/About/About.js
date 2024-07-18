import React from 'react';
import img1 from './my.png';

const About = () => {

  return (
    <section id="about" className="section mt-3">
      <div className="container mt-5">
        <div className="row text-center text-md-left">
          <div className="col-md-3">
            <img src={img1} alt="Profile" className="img-thumbnail mb-4" />
          </div>
          <div className="pl-md-4 col-md-9">
            <h6 className="title">Abdelkarim Selmi</h6>
            <p className="subtitle">Backend Developer & Machine Learning</p>
            <p>
              Hi, I am Abdelkarim Selmi, a third-year Computer Science student with a strong passion for technology and innovation. I am a dedicated and energetic individual with a keen interest in backend development and machine learning. I am eager to contribute to cutting-edge projects and continuously expand my skill set.
            </p>
            <p>
              I am a Backend Developer with a focus on machine learning. Proficient in MREN and MEAN, I am currently learning ASP.NET Core. Passionate about contributing to innovative projects and continuously expanding my skills, I am eager to leverage my expertise in backend development and machine learning.
            </p>
            <div className="buttons mt-3">
              <a className="btn btn-primary rounded" href='https://drive.google.com/file/d/1_m82EVsno44tcOIbRqxMg_bBNS9Ndpr_/view?usp=drive_link'>VIEW CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
