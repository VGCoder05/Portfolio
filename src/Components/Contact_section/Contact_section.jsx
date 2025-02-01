import React from 'react';

const Contact_section = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">

        {/* Contact Form  */}
        <div className="contact-form">

          <form action="#" method="POST">
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>

        </div>

        {/* Contact Information  */}
        <div className="contact-info">
          <h3>Let's Connect!</h3>
          <p>Feel free to reach out for collaborations or just a friendly hello.</p>

          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="#">your.email@example.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="#">+91 12 3456 7890</a>
            </li>
          </ul>

          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact_section;