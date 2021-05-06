import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
<footer className='footer'>
  <div clasName='footer__made'>
    Made with
    {''}
    <span role='img' aria-label='heart'>
      💜
    </span> {''}
    by
    <a 
    href="https://www.linkedin.com/in/gonzalojbueno/"
    rel="noopener noreferrer"
    target="_blank"
    className="logo"
    >
      <span className="logo-img">&lt;&gt;</span>
      {''} 
      <span>Gonzalo Good Bueno</span>
    </a>
    <div className="footer__location">
      CH,
      <span>Quilpué</span>, 2021
    </div>
  </div>
</footer>
);

export default Footer;