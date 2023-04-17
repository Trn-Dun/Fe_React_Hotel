import { Carousel, DatePicker, Select, Space } from "antd";
import ImgOne from "../../assets/img/bg_4.jpg.webp";
import ImgTwo from "../../assets/img/bg_2.jpg.webp";
import ImgTree from "../../assets/img/bg_3.jpg.webp";

const Home = () => {
  var optionRooms = [
    {
      value : 'suite',
      label : 'Suite'
    },
    {
      value : 'family-room',
      label : 'Family Room'
    },
    {
      value : 'classic-room',
      label : 'Classic Room'
    },
    {
      value : 'superior-room',
      label : 'Superior Room'
    },
    {
      value : 'luxury-room',
      label : 'Luxury Room'
    }
  ]
  var optionGuests = [
    {
      value: 'one-person',
      label: 'One Person'
    },
    {
      value: 'two-person',
      label: 'Two Person'
    },
    {
      value: 'tree-person',
      label: 'Tree Person'
    },
    {
      value: 'four-person',
      label: 'Four Person'
    },
    {
      value: 'five-person',
      label: 'Five Person'
    }
  ]
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
      <div className="container-home-booking">
        <div className="container-home-booking-item">
            <div className="container-home-booking-item-one">
                <p>Check - in</p>
                <Space direction="vertical">
                  <DatePicker placeholder="Check - in Date"/>
                </Space>
            </div>
            <div className="container-home-booking-item-two">
                <p>Check - out</p>
                <Space direction="vertical">
                  <DatePicker placeholder="Check - out Date"/>
                </Space>
            </div>
            <div className="container-home-booking-item-tree">
              <p>Rooms</p>
              <Space wrap>
                <Select defaultValue={optionRooms[0].value} options={optionRooms} style={{width: 150}}/>
              </Space>
            </div>
            <div className="container-home-booking-item-four">
              <p>Guests</p>
              <Space wrap>
                <Select defaultValue={optionGuests[0].value} options={optionGuests}/>
              </Space>
            </div>
        </div>
        <div className="container-home-booking-submit">
            <button>Check Availability</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
