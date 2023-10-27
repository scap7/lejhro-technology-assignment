import React from "react"


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
      {goToTopButton && <button onClick={goToTop}>go to top</button>}
    </div>
  )
}

export default GoToTopButton;
