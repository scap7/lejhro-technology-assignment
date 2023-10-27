import React from 'react'
import {HiMiniBars3CenterLeft} from "react-icons/hi2"
const StickyNav = ({sidebarHandle}) => {
    const [showSticky, setShowSticky] = React.useState(false);
  React.useEffect(()=>{
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    })
    }, [])
  return (
    <div className={`${showSticky?"show-sticky":"hidden"}`}>
      <div >
        <img src="../public/logo/lejhro_logo_blue.png" alt="lejhro" />
      </div >
      <div className='sticky-icon'>
      <button onClick={sidebarHandle}><HiMiniBars3CenterLeft/></button>
      </div>

    </div>
  )
}

export default StickyNav
