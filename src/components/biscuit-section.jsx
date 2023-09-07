import React from "react"

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

  export const BiscuitSection = () => (
  <section className="section section-biscuit">
   <div className="flex-row">
      {/* <img src={profilePicture} alt="dog" className="profile-image" /> */}
      <h2 className="profile-heading">Biscuit</h2>
      <p className="profile-caption">cavapoo, hecking good boy</p>
      <p className="profile-intro">{lorem}</p>
      <code>
        need a big image of Biscuit here to push the other sections out of initial view
      </code>
    </div>
  </section>
)
