import { UltraRacingPage } from './app.po';

describe('ultra-racing App', () => {
  let page: UltraRacingPage;

  beforeEach(() => {
    page = new UltraRacingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
