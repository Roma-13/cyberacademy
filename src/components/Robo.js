import React, { useState } from 'react';
import styles from "./curses.module.css";
import { Link } from 'react-router-dom';
import courseImage from "../asets/course-img2 (1).jpg"; 
import syllabusPdf from "../asets/silabus-web.docx"; 

function App() {
  const [miniSidebar, setMiniSidebar] = useState(false);
  const [micVisible, setMicVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

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

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleDownloadSyllabus = () => {
    const link = document.createElement('a');
    link.href = syllabusPdf;
    link.download = 'Robo_Sylabus.docx'; // Ensure the correct file format
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div className={styles.app}>
      <div id="mySidebar2" className={styles.sidebar2} style={{ width: sidebarOpen ? '250px' : '0' }}>
        <button className={styles.closebtn} onClick={closeNav}>☰</button>
        <Link to="/">მთავარი</Link>
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
          <button className={styles["glow-on-hover"]} type="button">მართვა</button>
        </Link>
        <Link to="/gallery">
          <button className={styles["glow-on-hover"]} type="button">გალერეა</button>
        </Link>
        <Link to="/mentors">
          <button className={styles["glow-on-hover"]} type="button">მენტორები</button>
        </Link>
        <Link to="/partners">
          <button className={styles["glow-on-hover"]} type="button">პარტნიორები</button>
        </Link>
      </div>

      <div className={styles.productCard}>
        <div className={styles.productTopSection}>
          <div className={styles.productHeader}>
            <h2 className={styles.productTitle}>რობოტოტექნიკა</h2>
            <div className={styles.productDescription}>
            რობოტოტექნიკის კურსზე თქვენ შეისწავლით თუ როგორ ააწყოთ სხვადასხვა

ელექტრონული მოწყობილობა ნებისმიერი საქმიანობისთვის

ამასთან თქვენ შეძლებთ ააწყოთ რობოტი, მისცეთ მას შესაბამისი დავალება

და ეს ყველაფერი თქვენ მომავალ საქმიანობად აქციოთ
            </div>
          </div>

          <div className={styles.productDeliveryInfo}>
            <div className={styles.checkoutHeader}>
              <span className={styles.availabilityTag}>ალექსანდრე ჯელია</span>
            </div>
            
            <div className={styles.productPrice}>
              <span className={styles.priceAmount}>750</span>
              <span className={styles.currency}>₾</span>
            </div>
            <div className={styles.deliveryInfo}>
              <p>კურსის ხანგძლივობა - 3 თვე</p>
              <p>კურსი მოიცავს რამდენიმე მიმართულებას:</p>
              <p>Arduino პროგრამირება</p>
              <p>ელექტრონული მოწყობილობების შექმნა</p>
              <p>სხვადასხვა მოწყობილობებისა და აპარატურის პრაქტიკული გამოყენება და შექმნა
              </p>
              <p>მაღალი დონის პროგრამირება, პროგრამული უზრუნველყოფის განვითარებისთვის
</p>
              <p>ელექტროდინამიკა, ელექტროსტატიკა და ყველა ფიზიკური პროცესი
              </p>
            </div>
            
            <div className={styles.productCardCheckout}>
              <button 
                className={styles.checkoutButton}
                onClick={handleDownloadSyllabus}
              >
                სილაბუსი
              </button>
            </div>
          </div>
        </div>

        <div className={styles.productImage}>
          <img src={courseImage} alt="Web Technologies" />
        </div>
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
    </div>
  );
}

export default App;