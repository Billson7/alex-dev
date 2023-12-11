import React, { ReactElement } from "react"
import { BasicContent } from "../types"

export const Cool = ({
  heading,
  intro,
  caption,
}: BasicContent): ReactElement => (
  <section className="section section-cool">
    <div className="flex-row">
      <h2 className="profile-heading">{heading}</h2>
      <p className="profile-caption">{intro}</p>
      <p className="profile-intro">{caption}</p>
    </div>
  </section>
)
