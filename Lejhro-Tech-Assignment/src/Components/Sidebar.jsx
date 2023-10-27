import {FaTwitterSquare,FaFacebookSquare,FaYoutubeSquare} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {LiaTimesSolid} from "react-icons/lia"
const Sidebar = ({showSidebar,sidebarHandle}) => {
  return (
    <div className={`${showSidebar?'show':'sidebar-hidden'} sidebar`}>
        <div>
            <div>
                <img src="../public/logo/lejhro_logo_blue.png" alt="lejhro" />
            </div>
            <button className="close-icon"onClick={sidebarHandle}><LiaTimesSolid/></button>
        </div>
      <ul>
        <li><a href="">Innovation</a></li>
        <li><a href="">Bootcamp</a></li>
        <li><a href="">Business Services</a></li>
        <li><a href="">Financial services</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="">Blogs</a></li>
      </ul>
      <div className="sidebar-social">
        <a href=""><FaTwitterSquare/></a>
        <a href=""><FaFacebookSquare/></a>
        <a href=""><BsLinkedin/></a>
        <a href=""><FaYoutubeSquare/></a>
      </div>
    </div>
  )
}

export default Sidebar
