import React, { useState } from 'react';
import styles from "./curses.module.css";
import { Link } from 'react-router-dom';
import courseImage from "../asets/course-4.jpg"; // Adjust the path as needed
import syllabusPdf from "../asets/silabus-rast.docx"; // Make sure you have this PDF file in your assets

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
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = syllabusPdf;
    link.download = 'Office_Syllabus.docx'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRegistration = () => {
    // Add registration functionality here
    console.log("Registration button clicked");
    // You might want to redirect to a registration page or open a modal
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
            <h2 className={styles.productTitle}>საოფისე პროგრამული უზრუნველყოფა</h2>
            <div className={styles.productDescription}>
            გსურთ შეისწავლოთ დღევანდელობის ყველაზე მოთხოვნადი საოფისე პროგრამები? მაშინ შემოგვიერთდით.

მიმდინარე კურსის ფარგლებში თქვენ შეისწავლით საოფისე პროგრამებს, გაეცნობით მათ რეალურ შესაძლებლობებს და შეძლებთ გამოიყენოთ ის ნებისმიერ საქმეში.

            </div>
          </div>

          <div className={styles.productDeliveryInfo}>
            <div className={styles.productPrice}>
              <span className={styles.priceAmount}>750</span>
              <span className={styles.currency}>₾</span>
            </div>
            <div className={styles.deliveryInfo}>
            <p>ხელმისაწვდომი ადგილები-30</p>
            <p>არ გამოტოვო შესაძლებლობა მარტივად შეისწავლო დაპროგრამების საფუძვლები.
            </p>
            <p>ხელმისაწვდომი ადგილები-30</p>
              <p>კურსის ხანგძლივობა - 3 თვე</p>
              <p>საოფისე პროგრამები (Microsoft Word, Microsoft Excel, Microsoft PowerPoint და დამატებითი პროგრამები)</p>
              <p>საფოსტო სერვისების მართებული გამოყენება;
              </p>
              <p>დარგობრივი ინგლისური ენა</p>
              <div className={styles.buttonContainer}>
                <button 
                  className={styles.syllabusButton}
                  onClick={handleDownloadSyllabus}
                >
                  სილაბუსი
                </button>
                <button 
                  className={styles.registrationButton}
                  onClick={handleRegistration}
                >
                  რეგისტრაცია
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.productImageContainer}>
          <div className={styles.productImage}>
            <img src={courseImage} alt="Web Technologies" />
          </div>
          <span className={styles.mentorTag}>ზურაბ მესხიძე</span>
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