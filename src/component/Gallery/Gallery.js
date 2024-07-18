import React from 'react';

const Gallery = () => {
  return (
    <section id="Gallery" className="section">
      <div className="container text-center">
        <h6 className="subtitle">Gallery</h6>
        <h6 className="section-title mb-4">Experience in Real Life</h6>
        <p className="mb-5 pb-4">
          Explore images showcasing my work environment, industry events, and other aspects of my professional experience in backend development and machine learning.
        </p>

        <div className="row">
          <div className="col-sm-4">
            <div className="img-wrapper">
              <img src="assets/imgs/workspace.jpg" alt="Workspace" />
              <div className="overlay">
                <div className="overlay-infos">
                  <h5>Workspace</h5>
                </div>  
              </div>
            </div>
            <div className="img-wrapper">
              <img src="assets/imgs/conference.jpg" alt="Conference" />
              <div className="overlay">
                <div className="overlay-infos">
                  <h5>Conference</h5>
                </div>  
              </div>
            </div>                  
          </div>
          <div className="col-sm-4">
            <div className="img-wrapper">
              <img src="assets/imgs/team.jpg" alt="Team" />
              <div className="overlay">
                <div className="overlay-infos">
                  <h5>Team Collaboration</h5>
                </div>  
              </div>
            </div>
            <div className="img-wrapper">
              <img src="assets/imgs/office.jpg" alt="Office" />
              <div className="overlay">
                <div className="overlay-infos">
                  <h5>Office</h5>
                </div>  
              </div>
            </div>                  
          </div>
          <div className="col-sm-4">
            <div className="img-wrapper">
              <img src="assets/imgs/workshop.jpg" alt="Workshop" />
              <div className="overlay">
                <div className="overlay-infos">
                  <h5>Workshop</h5>
                </div>  
              </div>
            </div>
            <div className="img-wrapper">
              <img src="assets/imgs/meetup.jpg" alt="Meetup" />
              <div className="overlay">
                <div className="overlay-infos">
                  <h5>Meetup</h5>
                </div>  
              </div>
            </div>                  
          </div>
        </div>

      </div>
    </section>
  ); 
};

export default Gallery;
