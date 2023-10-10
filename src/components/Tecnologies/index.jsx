import React from 'react';
import "./index.css";



function Tecnologies() {
return(
<section id="services" className="tecnologies">
  <h2>What I Do</h2>
  <div className="cards">
    <div className="card card-tecnologies">
      <img src="../../src/assets/vector.png" alt="" />
      <span>Software Developer</span>
    </div>
    <div className="card card-tecnologies">
      <img src="../../src/assets/quadrado.png" alt="" />
      <span>Web Development</span>
    </div>
    <div className="card card-tecnologies">
      <img src="../../src/assets/dev.png" alt="" />
      <span>Web Design</span>
    </div>
  </div>
</section>
)
}

export default Tecnologies;