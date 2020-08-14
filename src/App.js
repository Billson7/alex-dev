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
        <div id="bio-info">
          <p>I am a Leeds based, front-end software developer.</p>
        </div>
        <Email />
        <Npx />
        <p id="info-disclaimer">*Paste the above command into a terminal</p>
      </div>

      <div className="right-side-content">
        <img src={memoji} id="image" alt="Alex on a mac" />
      </div>
    </div>
  )
}

export default App
