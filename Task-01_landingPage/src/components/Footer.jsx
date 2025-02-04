import React from "react";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>* The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions information in your area.</p>
      <div>
      Copyright © 2025 Automobili Lamborghini S.p.A. a company with sole shareholder subject to the management and coordination of AUDI AG. <br/>
      All rights reserved. VAT no. IT 00591801204 <br/>
      WARNING ABOUT ILLEGAL OFFERS OF ALLEGED SHARES OF AUTOMOBILI LAMBORGHINI S.P.A.<br/>
      Automobili Lamborghini S.p.A. got the notice that several third parties across different countries are allegedly offering shares in Automobili Lamborghini S.p.A. These offers are unlawful and originate neither from Volkswagen Aktiengesellschaft nor from any of its subsidiaries.
      </div>
    </footer>
  );
}

export default Footer;
