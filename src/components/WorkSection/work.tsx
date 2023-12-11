import React from "react"
import { BasicContent } from "../types"

export const Work = ({ heading, intro, caption }: BasicContent) => (
  <section className="section section-work">
    <div className="flex-row">
      <h2 className="profile-heading">{heading}</h2>
      <p className="profile-caption-invert">{intro}</p>
      <p className="profile-intro">{caption}</p>
      <code style={{ display: "none" }}>
        github things? screenshots? links?
      </code>
    </div>
  </section>
)
