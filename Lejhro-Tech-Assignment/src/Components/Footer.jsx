import {FaTwitterSquare,FaFacebookSquare,FaYoutubeSquare} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <div>
      <div className="footer-break">
      </div>
      <div>
        <div className="footer-container">
          <div>
            <h3>Company</h3>
            <a href="">innovations</a>
            <a href="">Business services</a>
            <a href="">Financial Services</a>
            <a href="">Lejhro Recruiter</a>
            <a href="">About</a>
            <a href="">Blogs</a>
          </div>
          <div>
            <h3>Programs</h3>
            <a href="">Lejhro Bootcamp</a>
          </div>
          <div>
            <h3>Support</h3>
            <a href="">Contact</a>
            <a href="">Terms of Use</a>
            <a href="">Privacy Statement</a>
          </div>
          <div className="footer-social">
            <h3>Connect with us</h3>
            <a href=""><FaTwitterSquare /></a>
            <a href=""><FaFacebookSquare /></a>
            <a href=""><BsLinkedin /></a>
            <a href=""><FaYoutubeSquare /></a>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  )
}

export default Footer
