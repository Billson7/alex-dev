import React, { type FC } from "react"
import biscuitOutside from "./Assets/biscuit-outside.png"
import biscuitPortrait from "./Assets/biscuit-portrait.jpg"
import biscuitSocks from "./Assets/biscuit-socks.jpg"
import type { BasicContent } from "../../../types"

export const Biscuit: FC<BasicContent> = ({ heading, caption, intro }) => (
  <section className="is-hidden section section-biscuit section-biscuit-layout ">
    <div className="flex-row">
      <h2 className="profile-heading" data-testid="biscuit-heading">
        {heading}
      </h2>
      <p className="profile-caption" data-testid="biscuit-caption">
        {caption}
      </p>
      <p className="profile-intro" data-testid="biscuit-intro">
        {intro}
      </p>
    </div>
    <div className="biscuit-image-row" data-testid="biscuit-image-row">
      <img
        src={biscuitOutside}
        alt="biscuit-left"
        className="biscuit-image biscuit-image-mobile"
      />
      <img
        src={biscuitPortrait}
        alt="biscuit-middle"
        className="biscuit-image"
      />
      <img
        src={biscuitSocks}
        alt="biscuit-right"
        className="biscuit-image biscuit-image-mobile biscuit-image-ipad"
      />
    </div>
  </section>
)
