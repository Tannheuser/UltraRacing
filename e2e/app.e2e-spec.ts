import { UltraRacingTemplatePage } from './app.po';

describe('ultra-racing-template App', () => {
  let page: UltraRacingTemplatePage;

  beforeEach(() => {
    page = new UltraRacingTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
