import React, { ReactElement } from "react"
import profilePicture from "./Assets/profile-picture.jpeg"
import type { BasicContent } from "../../../types"

export const Hero = ({
  heading,
  caption,
  intro,
}: BasicContent): ReactElement => (
  <section className="section section-hero">
    <div className="flex-row">
      <img
        src={profilePicture}
        alt="profile of Alex"
        className="profile-image"
      />
      <h2 className="profile-heading" data-testid="profile-heading">
        {heading}
      </h2>
      <p className="profile-caption" data-testid="profile-caption">
        {caption}
      </p>
      <p className="profile-intro" data-testid="profile-intro">
        {intro}
      </p>
      <code style={{ display: "none" }}>
        need a graphic here to push the other sections out of initial view
      </code>
    </div>
  </section>
)
