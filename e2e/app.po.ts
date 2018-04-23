import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToRoot() {
    return browser.get('/');
  }

  getLoginHeadlineText() {
    return element(by.css('app-root h2')).getText();
  }
}
