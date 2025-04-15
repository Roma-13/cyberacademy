import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import './home.css';

const CyberAcademy = () => {
  const [miniSidebar, setMiniSidebar] = useState(false);
  const [micVisible, setMicVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMouseEnter = () => {
    setMiniSidebar(true);
    setMicVisible(false); 
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMiniSidebar(false);
      setMicVisible(true); 
    }, 300); 
  };
  
  const toggleSidebar = () => {
    setMiniSidebar(!miniSidebar);
  };
  
  const openNav = () => {
    setSidebarOpen(true);
  };
  
  const closeNav = () => {
    setSidebarOpen(false);
  };

  const courses = [
    { id: 1, image: 'picer-container-swiper', text: 'IT სპეციალისტი', link: '/It' },
    { id: 2, image: 'picer-container-swiper2', text: 'გრაფიკული დიზაინი', link: '/Graphics' },
    { id: 3, image: 'picer-container-swiper3', text: 'ვებ ტექნოლოგიები', link: '/webTech' },
    { id: 4, image: 'picer-container-swiper4', text: 'ალგორითმები', link: '/algo' },
    { id: 5, image: 'picer-container-swiper5', text: 'ფოტოგრაფია, ფოტოგრაფია მაკრეტინგში', link: '/photograph' },
    { id: 6, image: 'picer-container-swiper6', text: 'საოფისე პროგრამული უზრუნველყოფა', link: '/office' },
  ];

  const gallery = [
    { id: 1, image: 'picer-container-swiper-gallery-1', text: 'გალერეა', link: '/gallery' },
    { id: 2, image: 'picer-container-swiper-gallery-2', text: 'გალერეა', link: '/gallery' },
    { id: 3, image: 'picer-container-swiper-gallery-3', text: 'გალერეა', link: '/gallery' },
    { id: 4, image: 'picer-container-swiper-gallery-4', text: 'გალერეა', link: '/gallery' },
    { id: 5, image: 'picer-container-swiper-gallery-5', text: 'გალერეა', link: '/gallery' },
    { id: 6, image: 'picer-container-swiper-gallery-6', text: 'გალერეა', link: '/gallery' },
    { id: 7, image: 'picer-container-swiper-gallery-7', text: 'გალერეა', link: '/gallery' },
  ];

  const mentors = [
    { id: 1, image: 'picer-container-swiper-mentors', text: 'მენტორები', link: '/mentors' },
    { id: 2, image: 'picer-container-swiper-mentors2', text: 'მენტორები', link: '/mentors' },
    { id: 3, image: 'picer-container-swiper-mentors3', text: 'მენტორები', link: '/mentors' },
    { id: 4, image: 'picer-container-swiper-mentors4', text: 'მენტორები', link: '/mentors' },
    { id: 5, image: 'picer-container-swiper-mentors5', text: 'მენტორები', link: '/mentors' },
    { id: 6, image: 'picer-container-swiper-mentors6', text: 'მენტორები', link: '/mentors' },
  ];

  const partners = [
    { id: 1, image: 'picer-container-swiper-partneors', text: 'პარტნიორები', link: '/partners' },
    { id: 2, image: 'picer-container-swiper-partneors2', text: 'პარტნიორები', link: '/partners' },
    { id: 3, image: 'picer-container-swiper-partneors3', text: 'პარტნიორები', link: '/partners' },
    { id: 4, image: 'picer-container-swiper-partneors4', text: 'პარტნიორები', link: '/partners' },
    { id: 5, image: 'picer-container-swiper-partneors5', text: 'პარტნიორები', link: '/partners' },
    { id: 6, image: 'picer-container-swiper-partneors6', text: 'პარტნიორები', link: '/partners' },
    { id: 7, image: 'picer-container-swiper-partneors7', text: 'პარტნიორები', link: '/partners' },
  ];

  return (
    <div className="main-container">
      <div className="container-swiper desktop-view">
      <div
        className="sidebar"
        style={{
          width: miniSidebar ? "430px" : "90px",
          transition: "width 0.5s ease-in-out",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="mic"
          style={{
            display: micVisible ? "block" : "none",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div className="mic-shadow"></div>
        </div>

        <div className="inner-side-menu">
        <div 
            className="header-container5"
            id="header"
            style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
          >
            ჩვენ შესახებ
          </div>
          <div className="fix-it-container5">
            <div 
              className="texter1-container5"
              id="number"
              style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
            >
              +995 577 427 000
            </div>
          </div>
          <div className="fix-it-container5">
            <div 
              className="texter2-container5"
              id="addres"
              style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
            >
              <br/>
              ბათუმი, აღმაშენებლის 2 <br/>
              <br/>
              <br/>
              INFO@ACADEMY.EDU.GE
            </div>
          </div>

          <div className="fix-it-container5">
            <div className="texter2-container5" style={{ marginLeft: miniSidebar ? "20px" : "190px" }}>
              ბათუმი, აღმაშენებლის 2 <br />
              <a href="mailto:INFO@ACADEMY.EDU.GE">INFO@ACADEMY.EDU.GE</a>
            </div>
          </div>

          <div className="boxes-in-container5">
            <div className="box1-container5">
              <div className="header-box-container5" style={{ marginLeft: miniSidebar ? "-30px" : "190px" }}>
                MAP
              </div>

              <div className="maper">
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.29081238841826!2d41.612592077053016!3d41.63182261629536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406787a6b8a7e515%3A0xf66f06747969ee30!2sLLC%20Cyber%20Solutions!5e0!3m2!1sru!2sge!4v1706012975837!5m2!1sru!2sge" 
                  width="300" 
                  height="300" 
                  style={{ border: 0, marginLeft: miniSidebar ? '-85px' : '50px' }} 
                  allowFullScreen="" 
                  loading="fast" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  id="maper"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div
        id="main"
        style={{
          marginLeft: miniSidebar ? "430px" : "90px",
          transition: "margin-left 0.5s ease-in-out",
        }}
      ></div>

        <div className="swiper">
          <Link to="/courses">
            <button className="glow-on-hover" type="button">კურსები</button>
          </Link>

          <Swiper
            className="mySwiper"
            spaceBetween={30}
            centeredSlides={true}
            direction="vertical"
            slidesPerView={2.5}
            speed={1200}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              1300: { slidesPerView: 3.5, spaceBetween: 300 },
              1250: { slidesPerView: 3, spaceBetween: 30 },
              1100: { slidesPerView: 3.1, spaceBetween: 0 },
              1030: { slidesPerView: 3.1, spaceBetween: 0 },
              900: { slidesPerView: 4.5, spaceBetween: 350 },
              
              300: { slidesPerView: 5.4, spaceBetween: 0 },
            }}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <Link to={course.link}>
                  <div className="box-container-swiper">
                    <div className={course.image}></div>
                    <div className="texter-container-swiper">{course.text}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="swiper">
          <Link to="/gallery">
            <button className="glow-on-hover" type="button">გალერეა</button>
          </Link>
          <Swiper
            className="mySwiper2"
            spaceBetween={30}
            centeredSlides={true}
            direction="vertical"
            slidesPerView={2.5}
            speed={1200}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              1300: { slidesPerView: 3.5, spaceBetween: 300 },
              1250: { slidesPerView: 3, spaceBetween: 30 },
              1100: { slidesPerView: 3.1, spaceBetween: 0 },
              1030: { slidesPerView: 3.1, spaceBetween: 0 },
              900: { slidesPerView: 4.5, spaceBetween: 350 },
              300: { slidesPerView: 5.4, spaceBetween: 0 },
            }}
          >
            {gallery.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={item.link}>
                  <div className="box-container-swiper">
                    <div className={item.image}></div>
                    <div className="texter-container-swiper">{item.text}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="swiper">
          <Link to="/mentors">
            <button className="glow-on-hover" type="button">მენტორები</button>
          </Link>

          <Swiper
            className="mySwiper"
            spaceBetween={30}
            centeredSlides={true}
            direction="vertical"
            slidesPerView={2.5}
            speed={1200}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              1300: { slidesPerView: 3.5, spaceBetween: 300 },
              1250: { slidesPerView: 3, spaceBetween: 30 },
              1100: { slidesPerView: 3.1, spaceBetween: 0 },
              1030: { slidesPerView: 3.1, spaceBetween: 0 },
              900: { slidesPerView: 4.5, spaceBetween: 350 },
              300: { slidesPerView: 5.4, spaceBetween: 0 },
            }}
          >
            {mentors.map((mentor) => (
              <SwiperSlide key={mentor.id}>
                <Link to={mentor.link}>
                  <div className="box-container-swiper">
                    <div className={mentor.image}></div>
                    <div className="texter-container-swiper">{mentor.text}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="swiper">
          <Link to="/partners">
            <button className="glow-on-hover" type="button">პარტნიორები</button>
          </Link>

          <Swiper
            className="mySwiper2"
            spaceBetween={30}
            centeredSlides={true}
            direction="vertical"
            slidesPerView={2.5}
            speed={1200}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              1300: { slidesPerView: 3.5, spaceBetween: 300 },
              1250: { slidesPerView: 3, spaceBetween: 30 },
              1100: { slidesPerView: 3.1, spaceBetween: 0 },
              1030: { slidesPerView: 3.1, spaceBetween: 0 },
              900: { slidesPerView: 4.5, spaceBetween: 350 },
              300: { slidesPerView: 5.4, spaceBetween: 0 },
            }}
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <Link to={partner.link}>
                  <div className="box-container-swiper">
                    <div className={partner.image}></div>
                    <div className="texter-container-swiper">{partner.text}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="mobile mobile-view">
  <div id="mySidebar2" className={`sidebar2 ${sidebarOpen ? 'open' : ''}`}>
    <a className="closebtn" onClick={closeNav}>&times;</a>
    <Link to="/" onClick={closeNav}>მთავარი</Link>
    <Link to="/courses" onClick={closeNav}>კურსები</Link>
    <Link to="/gallery" onClick={closeNav}>გალერეა</Link>
    <Link to="/mentors" onClick={closeNav}>მენტორები</Link>
    <Link to="/partners" onClick={closeNav}>პარტნიორები</Link>
  </div>

  <div id="main2">
    <button className="openbtn" onClick={openNav}>&#9776;</button>
    <Link to="/">
      <div className="logo"></div>
    </Link>
  </div>

        <Link to="/">
          <div className="logo"></div>
        </Link>

        <div className="swiper3 mySwiper3">
          <Swiper
            navigation={{
              nextEl: ".swiper0-button-next",
              prevEl: ".swiper0-button-prev",
            }}
            loop={true}
            modules={[Navigation]}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <Link to={course.link}>
                  <div className="box-container-swiper">
                    <div className={course.image}></div>
                    <div className="texter-container-swiper">{course.text}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper0-button-next">
            <i className="fa-solid fa-circle-arrow-right"></i>
          </div>
          <div className="swiper0-button-prev">
            <i className="fa-solid fa-circle-arrow-left"></i>
          </div>
        </div>

        <div className="swiper3 mySwiper4">
          <Swiper
            navigation={{
              nextEl: ".swiper1-button-next",
              prevEl: ".swiper1-button-prev",
            }}
            loop={true}
            modules={[Navigation]}
          >
            {gallery.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={item.link}>
                  <div className="box-container-swiper">
                    <div className={item.image}></div>
                    <div className="texter-container-swiper">{item.text}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper1-button-next">
            <i className="fa-solid fa-circle-arrow-right"></i>
          </div>
          <div className="swiper1-button-prev">
            <i className="fa-solid fa-circle-arrow-left"></i>
          </div>
        </div>

        <div className="swiper3 mySwiper5">
          <Swiper
            navigation={{
              nextEl: ".swiper2-button-next",
              prevEl: ".swiper2-button-prev",
            }}
            loop={true}
            modules={[Navigation]}
          >
            {mentors.map((mentor) => (
              <SwiperSlide key={mentor.id}>
                <Link to={mentor.link}>
                  <div className="box-container-swiper">
                    <div className={mentor.image}></div>
                    <div className="texter-container-swiper">{mentor.text}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper2-button-next">
            <i className="fa-solid fa-circle-arrow-right"></i>
          </div>
          <div className="swiper2-button-prev">
            <i className="fa-solid fa-circle-arrow-left"></i>
          </div>
        </div>

        <div className="swiper3 mySwiper6">
          <Swiper
            navigation={{
              nextEl: ".swiper3-button-next",
              prevEl: ".swiper3-button-prev",
            }}
            loop={true}
            modules={[Navigation]}
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <Link to={partner.link}>
                  <div className="box-container-swiper">
                    <div className={partner.image}></div>
                    <div className="texter-container-swiper">{partner.text}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper3-button-next">
            <i className="fa-solid fa-circle-arrow-right"></i>
          </div>
          <div className="swiper3-button-prev">
            <i className="fa-solid fa-circle-arrow-left"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberAcademy;