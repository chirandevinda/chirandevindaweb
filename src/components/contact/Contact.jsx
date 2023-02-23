import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import github from "../../img/GitHub.png";
import fb from "../../img/fb.png";
import inta from "../../img/instagram.png";
// import { useContext } from "react";
// import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
  // const formRef = useRef();
  // const [done, setDone] = useState(false)
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_rrvnzco",
  //       "template_3v5nih4",
  //       formRef.current,
  //       "user_DrriDPTGKO2Zj4RDXCA6W"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true)
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Feel Free to e-mail</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +94 771531590
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              govinnachiran@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              51/6/A Godagama Road, Athurugiriya.
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={github} alt="github" />
              github.com/chirandevinda
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={inta} alt="instagam" />
              https://www.linkedin.com/in/chiran-devinda-3a1a3023a/
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={fb} alt="facebook" />
              https://www.facebook.com/profile.php?id=100088987451761
            </div>
          </div>
        </div>
        {/* <div className="c-right"> */}
          {/* <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p> */}
          {/* <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;
