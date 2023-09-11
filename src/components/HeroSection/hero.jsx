import React from "react"
import profilePicture from "./Assets/profile-picture.jpeg"

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
export const Hero = () => (
  <section className="section section-hero">
    <div className="flex-row">
      <img src={profilePicture} alt="dog" className="profile-image" />
      <h2 className="profile-heading">Alex Billson</h2>
      <p className="profile-caption">://developer</p>
      <p className="profile-intro">{lorem}</p>
      <code>
        need a graphic here to push the other sections out of initial view{" "}
      </code>
    </div>
  </section>
)
