import { content } from '../fixtures/content';
import { getContent } from './content-selector';

const expectedResponse = {
  biscuitContent: {
    caption: 'cavapoo, hecking good boy',
    heading: 'Biscuit',
    intro:
      'He likes toys that squeak, yakker chews and being all in your business'
  },
  coolContent: {
    caption: 'trust me',
    heading: 'Something cool',
    intro: 'Coming soon ...'
  },
  heroContent: {
    caption: '://developer',
    heading: 'Alex Billson',
    intro: 'Software engineer, coffee enthusiast'
  },
  workContent: {
    caption: 'typing, clicking, stackoverflow-ing, caffeinating',
    heading: 'Work',
    intro: 'Coming soon ...'
  }
};

describe('getContent selector', () => {
  it('return the correct content', () => {
    const testContent = getContent(content);

    expect(testContent).toEqual(expectedResponse);
  });
});
