import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
        Krzysztof Kopczynski | <b>FED</b> | Edinburgh {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
