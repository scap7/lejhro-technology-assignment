import React from "react"
import {AiOutlineArrowUp} from "react-icons/ai"


const GoToTopButton = () => {
  const [goToTopButton, setgoToTopButton] = React.useState(false);
  React.useEffect(()=>{
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setgoToTopButton(true);
      } else {
        setgoToTopButton(false);
      }
    })
    }, [])
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="go-to-top">
      {goToTopButton && <button onClick={goToTop}><AiOutlineArrowUp/></button>}
    </div>
  )
}

export default GoToTopButton;
