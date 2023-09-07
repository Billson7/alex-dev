import React from "react"
import "./App.css"

import Spinner from "./components/spinner"
import { Header } from "./components/header"

export const App = () => (
  <main className="page-section">
    <div id="logo">
      <Spinner />
      <Header />
    </div>
    <section className="section section-hero">
      <div className="flex-row">hero section</div>
    </section>
    <section className="section section-biscuit">
      <div className="flex-row">biscuit section</div>
    </section>
    <section className="section section-work">
      <div className="flex-row">work section</div>
    </section>
    <section className="section section-cool">
      <div className="flex-row">cool section</div>
    </section>
  </main>
)
