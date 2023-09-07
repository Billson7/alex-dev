import React from "react"
import biscuitOutside from "../Assets/biscuit-outside.png"
import biscuitPortrait from "../Assets/biscuit-portrait.jpg"
import biscuitSocks from "../Assets/biscuit-socks.jpg"

const lorem =
  "He likes toys that squeak, yakker chews and being all in your business"

export const Biscuit = () => (
  <section className="section section-biscuit">
    <div className="flex-row">
      <h2 className="profile-heading">Biscuit</h2>
      <p className="profile-caption">cavapoo, hecking good boy</p>
      <p className="profile-intro">{lorem}</p>
    </div>
    <div className="biscuit-image-row">
      <img src={biscuitOutside} alt="dog" className="biscuit-image" />
      <img src={biscuitPortrait} alt="dog" className="biscuit-image" />
      <img src={biscuitSocks} alt="dog" className="biscuit-image" />
    </div>
  </section>
)
