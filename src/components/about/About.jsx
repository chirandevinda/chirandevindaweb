import "./about.css";
// import Award from "../../img/award.png";
import me from "../../img/MY_IMG.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img 
            src= {me}
            alt="Me"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="title">About me</h1>
        <p className="a-sub">
        “A good programmer is someone who always looks both ways before crossing a one-way street.”
        </p>
        <p className="a-desc">
        I am a hardworking and ambitious individual with a great passion to
        explore new things in the field of the computer industry. I have excellent
        communication skills, enabling me to effectively communicate with a
        wide range of people. My greatest passion is in life is using my technical
        know-how to benefit other people and organizations.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
