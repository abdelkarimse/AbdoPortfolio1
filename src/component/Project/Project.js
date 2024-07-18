import React from 'react';
import img1 from './img1.jpg';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Project = () => {
  return (
    <section id="blog" class="section">
        <div class="container text-center">
            <h6 class="subtitle">My Project</h6>
            <h6 class="section-title mb-4">Latest News</h6>
            <p class="mb-5 pb-4">Explore the details of our latest project where we tackled complex challenges and delivered innovative solutions. This project showcases our expertise and dedication to excellence. For a deeper dive into the project, including code and additional information, please visit our GitHub repository..</p>

            <div class="container text-center">
            <a
                href="https://github.com/abdelkarimse"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> View on GitHub
              </a>
            </div>
        </div>
    </section>
  ); 
};

export default Project;
