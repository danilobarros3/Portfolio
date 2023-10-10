import React from 'react';
import "./index.css";
import Button from "../Button";

function Info() {
return(
<section className="info">
  <div className="section-name">
    <h1>
      Hi, I am
    </h1>
    <span> Danilo Barros </span>
    <div className="subtitle">
      Frontend Developer
    </div>
    <div className="buttons-container">
      <Button 
        text="Download CV" 
        link="https://drive.google.com/file/d/19n9dIxg13N9JUINgIEGrFqH5fa8294EF/view?usp=sharing" 
        variant="contained" 
        style={{ backgroundColor: '#27AE60', marginRight:"20px" }}
        />
      <Button 
        text="Learn More" 
        variant="outlined" 
        style={{ borderColor: '#fff', color: '#fff' }}
      />
    </div>
  </div>
  <div className="section-image">
    <img src="../../src/assets/foto.jpeg" alt="foto" />
  </div>
</section>

)
}

export default Info;