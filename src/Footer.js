import React from "react";

function Footer({ contactInfo }) {
  
  return (
    <footer className="footer">
      <ul>
        {contactInfo.map((item) => (
          <li style={{listStyle:"none"}} key={item}>{item}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
