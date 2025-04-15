import React, { useState } from 'react';
import styles from './mentors.module.css';
import { Link } from 'react-router-dom';

const MentorsPage = () => {
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
      <div className={styles.png1}></div>
      <div className={styles.png2}></div>
      <div className={styles.png3}></div>
      <div className={styles.png4}></div>
      <div className={styles.png5}></div>
      <div className={styles.png6}></div>
      <div className={styles.png7}></div>
      <div className={styles.png8}></div>

      <div id="mySidebar2" className={styles.sidebar2} style={{ width: sidebarOpen ? '250px' : '0' }}>
        <a className={styles.closebtn} onClick={closeNav}>☰</a>
        <Link to="/">მთავარი</Link>
        <Link to="/courses">კურსები</Link>
        <Link to="/gallery">გალერეა</Link>
        <Link to="/mentors">მენტორები</Link>
        <Link to="/partners">პარტნიორები</Link>
      </div>
      
      <div id="main2" style={{ marginLeft: sidebarOpen ? '250px' : '0' }}>
        <button 
          className={styles.openbtn} 
          id="openBtn" 
          onClick={openNav} 
          style={{ display: sidebarOpen ? 'none' : 'block' }}
        >
          ☰ 
        </button>  
      </div>

      <div className={styles.container}>
        <Link to="/">
          <button className={styles.glowOnHover} type="button">მართვა</button>
        </Link>
        <Link to="/courses">
          <button className={styles.glowOnHover} type="button">კურსები</button>
        </Link>    
        <Link to="/gallery">
          <button className={styles.glowOnHover} type="button">გალერეა</button>
        </Link>
        <Link to="/partners">
          <button className={styles.glowOnHover} type="button">პარტნიორები</button>
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

      <div id="mento" className={styles.container3}>
        <div className={styles.headerContainer3}>მენტორები</div>
        <div className={styles.fixTiIn}>
          <div className={styles.contentBoxContainer3}>
            <div className={styles.line1}>
              <div className={styles.mentorsBox}>
                <div className={styles.fixPicerContainer3}>
                  <div className={styles.picerMentors}></div>
                </div>
                <div className={styles.contentMentors}>
                  <div className={styles.headerConntainer3}>კახი კახიძე</div>
                  <div className={styles.texterContainer3_1}>
                    აკადემიის მასწავლებელი
                  </div>
                  <div className={styles.bigTexterContainer3}>
                    კომპიუტერულ მეცნიერებათა მაგისტრი, ბათუმის სახელმწიფო უნივერსიტეტის მოწვეული მასწავლებელი, WEB დეველოპერი
                  </div>
                </div>
              </div>
              <div className={styles.mentorsBox}>
                <div className={styles.fixPicerContainer3}>
                  <div className={styles.picerMentors1}></div>
                </div>
                <div className={styles.contentMentors}>
                  <div className={styles.headerConntainer3}>დემიდ ფასიეშვილი</div>
                  <div className={styles.texterContainer3_1}>
                    აკადემიის დამფუძნებელი
                  </div>
                  <div className={styles.bigTexterContainer3}>
                    კომპიუტერულ მეცნიერებათა მაგისტრი ბათუმის სახელმწიფო უნივერსიტეტის მასწავლებელი
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.line2}>
              <div className={styles.mentorsBox}>
                <div className={styles.fixPicerContainer3}>
                  <div className={styles.picerMentors2}></div>
                </div>
                <div className={styles.contentMentors}>
                  <div className={styles.headerConntainer3}>ზურაბ მესხიძე</div>
                  <div className={styles.texterContainer3_1}>
                    აკადემიის დამფუძნებელი
                  </div>
                  <div className={styles.bigTexterContainer3}>
                    კომპიუტერულ მეცნიერებათა დოქტორანტი ბათუმის სახელმწიფო უნივერსიტეტის მასწავლებელი
                  </div>
                </div>
              </div>

              <div className={styles.mentorsBox}>
                <div className={styles.fixPicerContainer3}>
                  <div className={styles.picerMentors3}></div>
                </div>
                <div className={styles.contentMentors}>
                  <div className={styles.headerConntainer3}>გიორგი კალანდაძე</div>
                  <div className={styles.texterContainer3_1}>
                    აკადემიის მასწავლებელი
                  </div>
                  <div className={styles.bigTexterContainer3}>
                    კომპიუტერულ მეცნიერებათა ბაკალავრი ფოტოგრაფი, მარკეტინგის სპეციალისტი
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.line3}>
              <div className={styles.mentorsBox}>
                <div className={styles.fixPicerContainer3}>
                  <div className={styles.picerMentors4}></div>
                </div>
                <div className={styles.contentMentors}>
                  <div className={styles.headerConntainer3}>Lorem ipsum</div>
                  <div className={styles.texterContainer3_1}>
                    Experience - Lorem ipsum dolor sit amet
                  </div>
                  <div className={styles.texterContainer3_2}>
                    Experience - Lorem ipsum dolor sit amet
                  </div>
                  <div className={styles.bigTexterContainer3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elittttt.
                    Aliquam, saepe accusadolor dolor dolordolor
                  </div>
                </div>
              </div>

              <div className={styles.mentorsBox}>
                <div className={styles.fixPicerContainer3}>
                  <div className={styles.picerMentors5}></div>
                </div>
                <div className={styles.contentMentors}>
                  <div className={styles.headerConntainer3}>მიხეილ დონაძე</div>
                  <div className={styles.texterContainer3_1}>
                    აკადემიის დირექტორი
                  </div>
                  <div className={styles.bigTexterContainer3}>
                    კომპიუტერულ მეცნიერებათა დოქტორი ბათუმის სახელმწიფო უნივერსიტეტის ასოცირებული პროფესორი
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsPage;