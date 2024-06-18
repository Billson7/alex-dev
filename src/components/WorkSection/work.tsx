import React, { type FC } from "react"
import type { BasicContent } from "../../../types"
import { Section } from "../Section/section"

export const Work: FC<BasicContent> = ({ heading, caption, intro }) => (
  <Section>
    <div className="flex-row section-work">
      <h2 className="profile-heading">{heading}</h2>
      <p className="profile-caption-invert">{caption}</p>
      <p className="profile-intro">{intro}</p>
      <code style={{ display: "none" }}>
        github things? screenshots? links?
      </code>
    </div>
  </Section>
)
