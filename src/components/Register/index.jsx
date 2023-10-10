import React from 'react';
import "./index.css";
import FormInput from "../FormInput"
import Button from "../Button";


function Register(){
return(
<section id="contact-me">
    <h2>Get in Touch</h2>
    <form className="form">
        <div className="form-input">
            <FormInput id="standard-basic" label="Name" variant="standard" />
            <FormInput id="standard-basic" label="Last Name" variant="standard" />
        </div>
        <div className="form-input">
            <FormInput id="standard-basic" label="Email" variant="standard" />
            <FormInput id="standard-basic" label="Phone Number" variant="standard" />
        </div>
        <div className="message">
            <FormInput id="standard-basic" label="Message" variant="standard" rows="4"/>
        </div>
        <div className="button-submit">
            <Button text="Submit Now" variant="contained" style={{ backgroundColor: '#27AE60' }} />
        </div>
    </form>
</section>

)
}

export default Register;