import React from 'react';
import "./index.css";


function Skills() {
return(
<section className="skills">
    <h2>My Skills</h2>
    <div className="card">
        <div className="card-item">
            <span className="card-number">30%</span>
            <font color="#27AE60"> <span>HTML</span> </font>
        </div>
        <div className="card-item">
            <span className="card-number">30%</span>
            <font color="#27AE60"> <span>CSS</span> </font>
        </div>
        <div className="card-item">
            <span className="card-number">20%</span>
            <font color="#27AE60"> <span>JAVASCRIPT</span> </font>
        </div>
        <div className="card-item">
            <span className="card-number">10%</span>
            <font color="#27AE60"> <span>REACTJS</span> </font>
        </div>
    </div>
</section>

)
}

export default Skills;