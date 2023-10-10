import React from 'react';
import "./index.css";

function About() {
return(
<section className="about">
  <h2 id="about-me">About</h2>
  <p className="about-text"> I am a student in the fourth semester of the Systems Analysis and Development course at
    Facens. I have a passion for technology and
    I'm focused on improving myself as a Front-End developer. I consider this motivation
    a great advantage in an IT team. I am constantly looking for new
    knowledge, following the latest trends and popular frameworks. I value the
    team collaboration and I am determined to contribute significantly to the
    company success.</p>

  <div className="icons">
    <a href="https://github.com/danilobarros3" target="_blank">
      <ion-icon name="logo-github"> </ion-icon>
    </a>

    <a href="https://www.linkedin.com/in/danilobarros3/" target="_blank">
      <ion-icon name="logo-linkedin"> </ion-icon>
    </a>

    <a href="mailto:danilo.barros3@outlook.com" class="link-email" target="_blank">
      <ion-icon name="mail-unread-outline"></ion-icon>
    </a>

    <a href="https://wa.me/5515997944546/" class="link-whats" target="_blank">
      <ion-icon name="call-outline"></ion-icon>
    </a>
  </div>

</section>

)
}

export default About;