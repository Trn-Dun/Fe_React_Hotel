const Navigation = () => {
  return (
    <div className="container">
      <div className="navigation-container">
        <div className="navigation-container-logo">
          <h1>Unwind</h1>
          <p>Hotel Booking</p>
        </div>
        <div className="navigation-container-item">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/rooms">Rooms</a>
            </li>
            <li>
              <a href="/resto&bar">Resto & Bar</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
