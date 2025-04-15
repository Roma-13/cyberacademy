import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './gallery.module.css';

const GalleryPage = () => {
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

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div
        id="mySidebar2"
        className={styles.sidebar2}
        style={{ width: sidebarOpen ? '250px' : '0' }}
      >
        <a href="javascript:void(1)" className={styles.closebtn} onClick={closeNav}>
          ☰
        </a>
        <Link to="/">მთავარი</Link>
        <Link to="/courses">კურსები</Link>
        <Link to="/gallery">გალერეა</Link>
        <Link to="/mentors">მენტორები</Link>
        <Link to="/partners">პარტნიორები</Link>
      </div>

      {/* Main 2 (Hamburger Button Container) */}
      <div id="main2">
        <button className={styles.openbtn} id="openBtn" onClick={openNav}>
          ☰
        </button>
      </div>

      <div className={styles.container}>
        <Link to="/">
          <button className={styles.glowOnHover} type="button">
            მართვა
          </button>
        </Link>
        <Link to="/courses">
          <button className={styles.glowOnHover} type="button">
            კურსები
          </button>
        </Link>
        <Link to="/mentors">
          <button className={styles.glowOnHover} type="button">
            მენტორები
          </button>
        </Link>
        <Link to="/partners">
          <button className={styles.glowOnHover} type="button">
            პარტნიორები
          </button>
        </Link>
      </div>

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
              INFO@ACADEMY.EDU.GE
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
      
      <div id="gal" className={styles.container2}>
        <h1>გალერეა</h1>

        <div className={styles.galleryWrap}>
          <div className={`${styles.item} ${styles.item1}`}></div>
          <div className={`${styles.item} ${styles.item2}`}></div>
          <div className={`${styles.item} ${styles.item3}`}></div>
          <div className={`${styles.item} ${styles.item4}`}></div>
          <div className={`${styles.item} ${styles.item5}`}></div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;