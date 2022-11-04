import React from "react"
import "../App.css"

import Spinner from "../components/spinner"
import Header from "../components/header"

import biscuit from "../Assets/biscuit.png"

export const Biscuit = () => (
  <div className="page-section">
    <div id="logo">
      <Spinner />
      <Header name="Biscuit" />
    </div>
    <div className="left-site-content">
      <h4 id="subHeader">Biscuit</h4>
      <div id="bio-info">
        <p>My dog, the Cavapoo, the myth, the legend</p>
      </div>
    </div>
    <div className="right-side-content">
      <a href="/alex">
        <img src={biscuit} id="image" alt="biscuit" />
      </a>
    </div>
  </div>
)
