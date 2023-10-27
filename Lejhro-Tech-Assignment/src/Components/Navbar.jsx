
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
const Navbar = ({ sidebarHandle }) => {
    return (
        <header>
            <nav>
                <div>
                    <img src="../public/logo/lejhro_logo_blue.png" alt="" />
                </div>
                <h2>Blogs</h2>
                <ul>
                    <li><a href="">Innovation</a></li>
                    <li><a href="">Bootcamp</a></li>
                    <li><a href="">Business Services</a></li>
                    <li><a href="">Financial services</a></li>
                </ul>
                <button onClick={sidebarHandle}><HiMiniBars3CenterLeft/></button>
            </nav>
        </header>
    )
}
export default Navbar