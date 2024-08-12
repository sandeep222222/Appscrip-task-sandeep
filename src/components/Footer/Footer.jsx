import React, { useState } from "react";
import US_Flag from "../../assets/images/US Flag.png";
import star from "../../assets/images/Star.png";
import insta_icon from "../../assets/images/Instagram logo.png";
import LinkedIn_icon from "../../assets/images/linkedin logo.png";
import gpay_icon from "../../assets/images/Gpay logo.png";
import mastercard_icon from "../../assets/images/Mastercard logo.png";
import paypal_icon from "../../assets/images/Paypal logo.png";
import american_express_icon from "../../assets/images/American Express logo.png";
import apple_pay_icon from "../../assets/images/Apple pay logo.png";
import opay_icon from "../../assets/images/O Pay logo.png";
import "./Footer.css";
import downArrow from "../../assets/icons/down-arrow-footer.png";

const Footer = () => {
  const [accordion1Open, setAccordion1Open] = useState(false);
  const [accordion2Open, setAccordion2Open] = useState(false);
  const [accordion3Open, setAccordion3Open] = useState(false);

  const toggleAccordion1 = () => {
    setAccordion1Open(!accordion1Open);
    setAccordion2Open(false);
    setAccordion3Open(false);
  };

  const toggleAccordion2 = () => {
    setAccordion2Open(!accordion2Open);
    setAccordion1Open(false);
    setAccordion3Open(false);
  };

  const toggleAccordion3 = () => {
    setAccordion3Open(!accordion3Open);
    setAccordion1Open(false);
    setAccordion2Open(false);
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="left-section">
          <h1 className="footer-heading">Be the first to know</h1>
          <p className="left-sec-hide-p">
            Sign up for updates from mettā muse.
          </p>
          <p className="left-sec-show-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <div className="subscribe-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </form>
          </div>
        </div>

        <div className="right-section">
          <div className="contact-section">
            <h1 className="footer-heading contact-hide">CONTACT US</h1>
            <h1 className="footer-heading call-us">CALL US</h1>
            <div className="contact-details">
              <p>+44 221 133 5360</p>
              <img className="star" src={star} alt="star icon" />
              <p>customercare@mettamuse.com</p>
            </div>
          </div>
          <div className="currency-section">
            <h1 className="footer-heading">currency</h1>
            <div className="currency-flag">
              <img src={US_Flag} alt="Flag of the United States" />
              <img className="star" src={star} alt="star icon" />
              <h2>USD</h2>
            </div>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-left">
          <h1 className="hide-bottom-header">mettā muse</h1>
          <div className="accordion-heading" onClick={toggleAccordion1}>
            <h1 className="footer-heading lowercase">mettā muse</h1>
            <img src={downArrow} alt="down arrow icon" />
          </div>
          <div className={`accordian-content ${accordion1Open ? "open" : ""}`}>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
        </div>
        <div className="bottom-center">
          <h1 className="footer-heading hide-bottom-header">Quick Links</h1>
          <div className="accordion-heading" onClick={toggleAccordion2}>
            <h1 className="footer-heading">Quick Links</h1>
            <img src={downArrow} alt="down arrow icon" />
          </div>
          <div className={`accordian-content ${accordion2Open ? "open" : ""}`}>
            <ul>
              <li>Orders & Shipping</li>
              <li className="hide-m">Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="bottom-right">
          <div className="follow-section">
            <h1 className="footer-heading hide-bottom-header">Follow Us</h1>
            <div className="accordion-heading" onClick={toggleAccordion3}>
              <h1 className="footer-heading">Follow Us</h1>
              <img src={downArrow} alt="down arrow icon" />
            </div>
            <div
              className={`accordian-content ${accordion3Open ? "open" : ""}`}
            >
              <div className="social-icon-container">
                <img src={insta_icon} alt="instagram logo" />
                <div className="border">
                  <img src={LinkedIn_icon} alt="LinkedIn logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="accepted-payment-sec">
            <h1>mettā muse Accepts</h1>
            <div className="payment-icon">
              <img src={gpay_icon} alt="Google pay logo" />
              <img src={mastercard_icon} alt="mastercard logo" />
              <img src={paypal_icon} alt="paypal logo" />
              <img src={american_express_icon} alt="american express logo" />
              <img src={apple_pay_icon} alt="apple pay logo" />
              <img src={opay_icon} alt="o pay logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright &copy; 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;