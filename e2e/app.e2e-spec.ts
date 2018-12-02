import { AppPage } from './app.po';
describe('adfc-radschulwege-frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Login should display welcome message', () => {
      page.navigateToRoot();
      expect(page.getLoginHeadlineText()).toEqual('BEI RADSCHULWEGPLAN ANMELDEN!');
  });
});

