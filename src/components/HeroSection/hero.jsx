import React from "react"
import profilePicture from "./Assets/profile-picture.jpeg"

export const Hero = ({ title, caption, intro }) => (
  <section className="section section-hero">
    <div className="flex-row">
      <img src={profilePicture} alt="dog" className="profile-image" />
      <h2 className="profile-heading">{title}</h2>
      <p className="profile-caption">{caption}</p>
      <p className="profile-intro">{intro}</p>
      <code>
        need a graphic here to push the other sections out of initial view
      </code>
    </div>
  </section>
)
