import Navbar from '../Navbar';
import Footer from '../footer';
import './About.css';

function About() {
  return (
    <>
    <Navbar ></Navbar>
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our platform! We are dedicated to providing the best services to our users.
        Our mission is to deliver high-quality products that meet the needs of our customers.
      </p>
      <p>
        Our team is made up of experienced professionals who are passionate about their work.
        We are committed to continuous improvement and innovation.
      </p>
      <p>
        Thank you for choosing our platform. We hope you have a great experience!
      </p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#061632" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,154.7C640,181,800,235,960,245.3C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <Footer></Footer>
    </>
  );
}

export default About;