import React, { type FC } from "react"
import type { BasicContent } from "../../../types"
import { Section } from "../Section/section"

export const Cool: FC<BasicContent> = ({ heading, caption, intro }) => (
  <Section>
    <div className="flex-row section-cool">
      <h2 className="profile-heading">{heading}</h2>
      <p className="profile-caption">{caption}</p>
      <p className="profile-intro">{intro}</p>
    </div>
  </Section>
)
