import React, { type FC } from 'react';
import './App.css';
import { Biscuit, Cool, Hero, Work } from './components';
import { content } from './fixtures/content';
import { getContent } from './selectors/content-selector';

export const App: FC = () => {
  const { heroContent, biscuitContent, workContent, coolContent } =
    getContent(content);

  return (
    <main className="page-section">
      <Hero {...heroContent} />
      <Biscuit {...biscuitContent} />
      <Work {...workContent} />
      <Cool {...coolContent} />
    </main>
  );
};
