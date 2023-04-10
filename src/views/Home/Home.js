import { Carousel } from "antd";
import ImgOne from "../../assets/img/bg_4.jpg.webp";
import ImgTwo from "../../assets/img/bg_2.jpg.webp";
import ImgTree from "../../assets/img/bg_3.jpg.webp";

const Home = () => {
  return (
    <div className="container-home">
      <div className="container-home-carousel">
        <Carousel autoplay>
          <div className="container-home-carousel-img_1">
            <img src={ImgOne} />
            <div className="container-home-carousel-intro">
              <h1>Unique Experience</h1>
              <p>Enjoy with us</p>
            </div>
          </div>
          <div className="container-home-carousel-img_2">
            <img src={ImgTwo} />
            <div className="container-home-carousel-intro">
              <h1>Welcome To Suites</h1>
              <p>Hotel & resort</p>
            </div>
          </div>
          <div className="container-home-carousel-img_3">
            <img src={ImgTree} />
            <div className="container-home-carousel-intro">
              <h1>Relaxing Room</h1>
              <p>Your room, your stay</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
