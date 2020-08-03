import React from "react"
import "./App.css"
import memoji from "./Assets/me-forwards.png"
import Spinner from "./components/spinner"
import Header from "./components/header"
import Email from "./components/email"
import Npx from "./components/npx"
const App = () => {
  return (
    <div className="page-section">
      <div id="logo">
        <Spinner />
        <Header />
      </div>
      <div className="left-site-content">
        <h4 id="subHeader">SOFTWARE DEVELOPER</h4>
        <div id="placeholder">
          <p>This will be a cool subheading that isn't a placeholder</p>
        </div>
        <Email />
        <Npx />
      </div>

      <div className="right-side-content">
        <img src={memoji} id="image" alt="Alex on a mac" />
      </div>
    </div>
  )
}

export default App
