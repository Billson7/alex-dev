import React, { ReactElement } from "react"
import type { BasicContent } from "../../../types"

export const Cool = ({
  heading,
  caption,
  intro,
}: BasicContent): ReactElement => (
  <section className="section section-cool">
    <div className="flex-row">
      <h2 className="profile-heading">{heading}</h2>
      <p className="profile-caption">{caption}</p>
      <p className="profile-intro">{intro}</p>
    </div>
  </section>
)
