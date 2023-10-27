

const Sidebar = ({showSidebar,sidebarHandle}) => {
  return (
    <div className={`${showSidebar?'show':'hidden'} sidebar`}>
        <div>
            <div>
                <img src="../public/logo/lejhro_logo_blue.png" alt="lejhro" />
            </div>
            <button onClick={sidebarHandle}>close</button>
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
      <div>
        <a href="">twitter</a>
        <a href="">facebook</a>
        <a href="">LinkedIn</a>
        <a href="">youtube</a>
      </div>
    </div>
  )
}

export default Sidebar
