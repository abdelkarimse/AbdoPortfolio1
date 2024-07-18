import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container text-center">
        <h6 className="subtitle">Skills</h6>
        <h6 className="section-title mb-4">Why Choose Me</h6>
        <p className="mb-5 pb-4">
          As a Backend Developer and Machine Learning enthusiast, I bring a balanced set of skills and a strong commitment to continuous improvement. Here’s why you should consider me:
        </p>
        <div className="row text-left">
          <div className="col-sm-6">
            <h6 className="mb-3">Backend Development</h6>
            <div className="progress">
              <div 
                className="progress-bar bg-dark" 
                role="progressbar" 
                style={{ width: '60%' }} 
                aria-valuenow="60" 
                aria-valuemin="0" 
                aria-valuemax="100"
              >
                <span>60%</span>
              </div>
            </div>
            <p>I have solid experience with backend technologies, including Node.js and MongoDB, and am always seeking to enhance my skills.</p>
          </div>
          <div className="col-sm-6">
            <h6 className="mb-3">Machine Learning</h6>
            <div className="progress">
              <div 
                className="progress-bar bg-dark" 
                role="progressbar" 
                style={{ width: '70%' }} 
                aria-valuenow="70" 
                aria-valuemin="0" 
                aria-valuemax="100"
              >
                <span>60%</span>
              </div>
            </div>
            <p>I have a foundational understanding of machine learning techniques and am actively working to deepen my knowledge and skills.</p>
          </div>
          <div className="col-sm-6">
            <h6 className="mb-3">Problem-Solving</h6>
            <div className="progress">
              <div 
                className="progress-bar bg-dark" 
                role="progressbar" 
                style={{ width: '60%' }} 
                aria-valuenow="60" 
                aria-valuemin="0" 
                aria-valuemax="100"
              >
                <span>60%</span>
              </div>
            </div>
            <p>I am enthusiastic about solving complex problems and am committed to improving my problem-solving skills through continuous practice and learning..</p>
          </div>
          <div className="col-sm-6">
            <h6 className="mb-3">Continuous Learning</h6>
            <div className="progress">
              <div 
                className="progress-bar bg-dark" 
                role="progressbar" 
                style={{ width: '100%' }} 
                aria-valuenow="100" 
                aria-valuemin="0" 
                aria-valuemax="100"
              >
                <span>60%</span>
              </div>
            </div>
            <p>I am committed to ongoing learning and development, staying updated with the latest industry trends and technologies to ensure I provide the best solutions.</p>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Skills;
