const Footer = () => {
  return (
    <div className="container-footer">
      <div className="footer-summary">
        <div className="footer-summary-logo">
          <h1>Unwind</h1>
          <p>Hotel Booking</p>
        </div>
        <div className="footer-summary-text">
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
      <div className="footer-services">
        <div className="footer-services-title">
          <h1>Services</h1>
        </div>
        <div className="footer-services-list">
          <ul className="footer-services-list-one">
            <li>
              <a>Free Wifi</a>
            </li>
            <li>
              <a>Easy Booking</a>
            </li>
            <li>
              <a>Restaurant</a>
            </li>
            <li>
              <a>Swimming Poor</a>
            </li>
          </ul>
          <ul className="footer-services-list-two">
            <li>
              <a>Beauty & Health</a>
            </li>
            <li>
              <a>60'' Flatscreen TV</a>
            </li>
            <li>
              <a>Cold Aircodition</a>
            </li>
            <li>
              <a>Help & Support</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-quick_link">
        <div className="footer-quick_link-title">
          <h1>Quick Links</h1>
        </div>
        <ul className="footer-quick_link-list">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Rooms</a>
          </li>
          <li>
            <a href="">Resto & Bar</a>
          </li>
        </ul>
      </div>
      <div className="footer-question">
        <div className="footer-question-title">
          <h1>Have a Question</h1>
        </div>
        <div className="footer-question-contact">
          <ul>
            <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li>
              <a href="tel:0396390108">0396390108</a>
            </li>
            <li>
              <a href="mailto:dongduntran@gmail.com">dongduntran@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
