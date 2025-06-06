import React, { type FC } from 'react';
import type { BasicContent } from '../../../types';
import profilePicture from './Assets/profile-picture.png';

export const Hero: FC<BasicContent> = ({ heading, caption, intro }) => (
  <section className="section section-hero">
    <div className="hero-tile">
      <div className="tile-media">
        <img
          src={profilePicture}
          alt="profile of Alex"
          className="profile-image"
        />
      </div>
      <div className="tile-content">
        <div className="profile-caption" data-testid="profile-caption">
          {caption}
        </div>
        <div className="profile-heading" data-testid="profile-heading">
          {heading}
          <div className="profile-intro" data-testid="profile-intro">
            {intro}
          </div>
        </div>
      </div>
    </div>
  </section>
);
