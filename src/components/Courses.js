import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./courses.module.css";
import course2Image from '../asets/course-2.jpg';
import course1Image from '../asets/cur-1.jpg';
import course3Image from '../asets/course-3.jpg';
import course4Image from '../asets/course-img1.jpeg';
import course5Image from '../asets/course-4.jpg';
import course6Image from '../asets/course-img2.jpeg';

const AcademyPage = () => {
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
    <div style={{
      position: 'relative',
      height: '100vh',
      margin: '0px',
      backgroundColor: '#16213b'
    }}>
      {/* Sidebar 2 */}
      <div className={styles.sidebar2} style={{
        width: sidebarOpen ? '250px' : '0',
        transition: '0.5s'
      }}>
        <button className={styles.closebtn} onClick={closeNav}>☰</button>
        <Link to="/">მთავარი</Link>
        <Link to="/courses">კურსები</Link>
        <Link to="/gallery">გალერეა</Link>
        <Link to="/mentors">მენტორები</Link>
        <Link to="/partners">პარტნიორები</Link>
      </div>
      
      <div id={styles.main2} style={{
        marginLeft: sidebarOpen ? '250px' : '0',
        transition: '0.5s'
      }}>
        <button 
          className={styles.openbtn} 
          style={{ display: sidebarOpen ? 'none' : 'block' }} 
          onClick={openNav}
        >
          ☰
        </button>  
      </div>

      <div className={styles.container1}>
        <Link to="/">
          <button className={styles['glow-on-hover']} type="button">მართვა</button>
        </Link>
        <Link to="/gallery">
          <button className={styles['glow-on-hover']} type="button">გალერეა</button>
        </Link>
        <Link to="/mentors">
          <button className={styles['glow-on-hover']} type="button">მენტორები</button>
        </Link>
        <Link to="/partners">
          <button className={styles['glow-on-hover']} type="button">პარტნიორები</button>
        </Link>
      </div>

      <div
        className={styles.sidebar}
        style={{
          width: miniSidebar ? "430px" : "90px",
          transition: "width 0.5s ease-in-out",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles.mic}
          style={{
            display: micVisible ? "block" : "none",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div className={styles['mic-shadow']}></div>
        </div>

        <div className={styles['inner-side-menu']}>
          <div 
            className={styles['header-container5']}
            id={styles.header}
            style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
          >
            ჩვენ შესახებ
          </div>
          <div className={styles['fix-it-container5']}>
            <div 
              className={styles['texter1-container5']}
              id={styles.number}
              style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
            >
              +995 577 427 000
            </div>
          </div>
          <div className={styles['fix-it-container5']}>
            <div 
              className={styles['texter2-container5']}
              id={styles.addres}
              style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
            >
              <br/>
              ბათუმი, აღმაშენებლის 2 <br/>
              <br/>
              <br/>
              INFO@ACADEMY.EDU.GE
            </div>
          </div>

          <div className={styles['fix-it-container5']}>
            <div className={styles['texter2-container5']} style={{ marginLeft: miniSidebar ? "20px" : "190px" }}>
              ბათუმი, აღმაშენებლის 2 <br />
              INFO@ACADEMY.EDU.GE
            </div>
          </div>

          <div className={styles['boxes-in-container5']}>
            <div className={styles['box1-container5']}>
              <div className={styles['header-box-container5']} style={{ marginLeft: miniSidebar ? "-30px" : "190px" }}>
                MAP
              </div>

              <div className={styles.maper}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.29081238841826!2d41.612592077053016!3d41.63182261629536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406787a6b8a7e515%3A0xf66f06747969ee30!2sLLC%20Cyber%20Solutions!5e0!3m2!1sru!2sge!4v1706012975837!5m2!1sru!2sge" 
                  width="300" 
                  height="300" 
                  style={{ border: 0, marginLeft: miniSidebar ? '-85px' : '50px' }} 
                  allowFullScreen="" 
                  loading="fast" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  id={styles.maper}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id={styles.main}
        style={{
          marginLeft: miniSidebar ? "430px" : "90px",
          transition: "margin-left 0.5s ease-in-out",
        }}
      ></div>
      
      <div className={styles['inner-container']}>
        <div className={styles.container}>
          <Link to="/graphics">
            <div className={styles.box}>
              <span>
                <div className={styles.d1}>3 თვე</div>
                <div className={styles.d2}>750 ლ.</div>
              </span>
              <div className={styles.content}>
                <img src={course2Image} alt="გრაფიკული დიზაინი" />
                <h2>გრაფიკული დიზაინი</h2>
                <p>ვექტორული გრაფიკა პროგრამა Adobe Illustrator, CorelDraw-ის ბაზაზე</p>
              </div>
            </div>
          </Link>

          <Link to="/It">
            <div className={styles.box}>
              <span>
                <div className={styles.d1}>3 თვე</div>
                <div className={styles.d2}>750 ლ.</div>
              </span>
              <div className={styles.content}>
                <img src={course1Image} alt="IT სპეციალისტი" />
                <h2>IT სპეციალისტი</h2>
                <p>პერსონელური კომპიუტერის აპარატურული და პროგრამული უზრუნველყოფა</p>
              </div>
            </div>
          </Link>

          <Link to="/WebTech">
            <div className={styles.box}>
              <span>
                <div className={styles.d1}>3 თვე</div>
                <div className={styles.d2}>750 ლ.</div>
              </span>
              <div className={styles.content}>
                <img src={course3Image} alt="ვებ ტექნოლოგიები" />
                <h2>ვებ ტექნოლოგიები</h2>
                <p>HTML+CSS – WEB გვერდების შექმნა და სტილების მართვა</p>
              </div>
            </div>
          </Link>

          <Link to="/algos">
            <div className={styles.box}>
              <span>
                <div className={styles.d1}>3 თვე</div>
                <div className={styles.d2}>750 ლ.</div>
              </span>
              <div className={styles.content}>
                <img src={course4Image} alt="პროგრამირების საფუძვლები" />
                <h2>პროგრამირების საფუძვლები და ალგორითმები</h2>
                <p>დაპროგრამების საფუძვლები C++-ის ბაზაზე</p>
              </div>
            </div>
          </Link>

          <Link to="/office">
            <div className={styles.box}>
              <span>
                <div className={styles.d1}>3 თვე</div>
                <div className={styles.d2}>750 ლ.</div>
              </span>
              <div className={styles.content}>
                <img src={course5Image} alt="საოფისე პროგრამული უზრუნველყოფა" />
                <h2>საოფისე პროგრამული უზრუნველყოფა</h2>
                <p>Microsoft Word, Microsoft Excell, Microsoft PowerPoint, ინტერნეტ პროგრამები</p>
              </div>
            </div>
          </Link>

          <Link to="/Photograph">
            <div className={styles.box}>
              <span>
                <div className={styles.d1}>3 თვე</div>
                <div className={styles.d2}>750 ლ.</div>
              </span>
              <div className={styles.content}>
                <img src={course6Image} alt="ფოტოგრაფია" />
                <h2>ფოტოგრაფია, <br /> ფოტოგრაფია მარკეტინგში</h2>
                <p>ფოტოგრაფიის აპარატურა და მისი შერჩევის თავისებურებები</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AcademyPage;