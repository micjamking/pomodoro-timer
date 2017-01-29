import { SauceTimerPage } from './app.po';

describe('sauce-timer App', function() {
  let page: SauceTimerPage;

  beforeEach(() => {
    page = new SauceTimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
