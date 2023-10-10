import React from 'react';
import "./index.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const nome = "Danilo Barros";

  return (
    <footer className="footer"> 
      <div className="container">
        <p>&copy; {nome} {currentYear} </p>
      </div>
    </footer>
  );
}

export default Footer;



