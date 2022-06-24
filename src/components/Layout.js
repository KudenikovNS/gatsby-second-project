import React from "react"
import NavBar from "./Navbar"
import Footer from "./Footer"

import "normalize.css"
import "../assets/CSS/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
