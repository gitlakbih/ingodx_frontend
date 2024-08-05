import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import '../styles/About.css';

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
    <Footer></Footer>
    </>
  );
}

export default About;