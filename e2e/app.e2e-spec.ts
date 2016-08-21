import { UltraRacingPage } from './app.po';

describe('ultra-racing App', function() {
  let page: UltraRacingPage;

  beforeEach(() => {
    page = new UltraRacingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
