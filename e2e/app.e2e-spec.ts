import { KwPage } from './app.po';

describe('kw App', () => {
  let page: KwPage;

  beforeEach(() => {
    page = new KwPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
