import React from "react"
import "../App.css"
import memoji from "../Assets/me-forwards.png"
import Spinner from "../components/spinner"
import Header from "../components/header"
import { Email } from "../components/email"
import Npx from "../components/npx"

export const Alex = () => (
  <div className="page-section">
    <div id="logo">
      <Spinner />
      <Header name="Alex Billson" />
    </div>
    <div className="left-site-content">
      <h4 id="subHeader">SOFTWARE DEVELOPER</h4>
      <div id="bio-info">
        <p>I am a Leeds based, mid-level Software Developer.</p>
      </div>
      <Email />
      <Npx />
    </div>
    <div className="right-side-content">
      <a href="/biscuit">
        <img src={memoji} id="image" alt="Alex on a mac" />
      </a>
    </div>
  </div>
)
