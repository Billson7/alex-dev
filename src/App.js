import React from "react"
import "./App.css"
import memoji from "./Assets/me-forwards.png"
import { Spinner, Header, Email, Npx } from "./components/index"

export const App = () => {
  return (
    <div className="page-section">
      <div id="logo">
        <Spinner />
        <Header />
      </div>
      <div className="left-site-content">
        <h4 id="subHeader">SOFTWARE DEVELOPER</h4>
        <div id="bio-info">
          <p>I am a Leeds based, front-end Software Developer.</p>
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
