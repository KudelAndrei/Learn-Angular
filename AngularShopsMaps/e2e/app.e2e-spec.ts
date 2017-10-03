import { AngularShopsMapsPage } from './app.po';

describe('angular-shops-maps App', () => {
  let page: AngularShopsMapsPage;

  beforeEach(() => {
    page = new AngularShopsMapsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
