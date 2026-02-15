import bg from "../../assets/applevalentine.webp";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="headingdiv">
        <h1 className="store">Store</h1>
        <div className="secondheading">
          <h3 className="content">
            Find Valentine’s Day gifts <span>in a heartbeat.</span>{" "}
          </h3>
          <a  className="link" href=""> Connect with a Specialist ↗</a>
          <a className="link" href=""> Find an Apple Store ↗</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
