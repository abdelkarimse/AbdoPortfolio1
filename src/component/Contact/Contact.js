import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
const Contact = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_whuuljl', 'template_odgfbh9', e.target, 'yL-jy18t4u3gJY2NL')
      .then((result) => {
        setStatusMessage('Message sent successfully!');
        setForm({
          email: '',
          password: '',
          message: ''
        });
      }, (error) => {
        setStatusMessage('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div>
      <section id="contact" className="position-relative section">
        <div className="container text-center">
          <h6 className="subtitle">Contact</h6>
          <h6 className="section-title mb-4">Get In Touch With Me</h6>
          <p className="mb-5 pb-4">
          Feel free to reach out if you have any questions or would like to discuss opportunities. I'm here to help!"
          </p>

          <div className="contact text-left">
            <div className="form">
              <h6 className="subtitle">Available 24/7</h6>
              <h6 className="section-title mb-4">Get In Touch</h6>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    placeholder="Enter your email" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    id="message" 
                    cols="30" 
                    rows="5" 
                    className="form-control" 
                    value={form.message} 
                    onChange={handleChange} 
                    placeholder="Message" 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-block rounded w-lg"
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
                {statusMessage && <p>{statusMessage}</p>}
              </form>
            </div>
            <div className="contact-infos">
              
              <div className="item">
              <i className="fa fa-phone"></i> {/* FontAwesome 4 phone icon */}
              <div>
                  <h5>Phone Number</h5>
                  <p>+216 96 211 030</p>
                </div>                          
              </div>
              <div className="item">
              <i className="fa fa-envelope"></i> {/* FontAwesome 4 email icon */}
              <div className="mb-0">
                  <h5>Email Address</h5>
                  <p>aselmi716@gmail.com</p>
                </div>
              </div>
            </div>                  
          </div>
        </div>  
      </section>
      <footer className="page-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <p>Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a href="http://www.devcrud.com" target="_blank">ABDO</a></p>
            </div>
            <div className="col-sm-6">
              <div className="socials">
              <a className="social-item" href="https://www.linkedin.com/in/abdelkarim-selmi">
            <FontAwesomeIcon icon={faLinkedin} /></a>
            <a className="social-item" href="https://github.com/abdelkarimse">
            <FontAwesomeIcon icon={faGithub} />
          </a>                
          <a className="social-item" href="https://codeforces.com/profile/Fkarim">
          <FontAwesomeIcon icon={faLightbulb} />
          </a>              </div>
            </div>
          </div>
        </div>
      </footer> 
    </div>
  );
}

export default Contact;
