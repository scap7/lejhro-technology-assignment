import Sidebar from "./Components/Sidebar"
import GoToTopButton from "./Components/GoToTopButton"
import Footer from "./Components/Footer"
import BlogContent from "./Components/BlogContent"
import Navbar from "./Components/Navbar"
import StickyNav from "./Components/StickyNav"
import React from "react"

const App=()=>{
  const [showSidebar,setShowSidebar]=React.useState(false);
  const sidebarHandle=()=>{
    setShowSidebar(prev=>!prev);
  }
  
  return(
    <main>
       <StickyNav sidebarHandle={sidebarHandle}/>
      <Navbar sidebarHandle={sidebarHandle}/>
      <Sidebar showSidebar={showSidebar} sidebarHandle={sidebarHandle}/>
      <GoToTopButton/>
      <BlogContent/>
      <Footer/>
     
    </main>
  )
}
export default App