import React, { type FC } from 'react';
import type { BasicContent } from '../../../types';

export const Cool: FC<BasicContent> = ({ heading, caption, intro }) => (
  <section className="section section-cool">
    <div className="flex-row">
      <h2 className="profile-heading">{heading}</h2>
      <p className="profile-caption">{caption}</p>
      <p className="profile-intro">{intro}</p>
    </div>
  </section>
);
