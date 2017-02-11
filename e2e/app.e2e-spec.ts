import { NintexPage } from './app.po';

describe('nintex App', function() {
  let page: NintexPage;

  beforeEach(() => {
    page = new NintexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
