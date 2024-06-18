import React, { useRef, type FC } from "react"
import profilePicture from "./Assets/profile-picture.jpeg"
import type { BasicContent } from "../../../types"
import { Section } from "../Section/section"

export const Hero: FC<BasicContent> = ({ heading, caption, intro }) => (
  <Section>
    <div className="section-hero flex-row">
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
  </Section>
)
