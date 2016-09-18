import { Ng2CliStarterPage } from './app.po';

describe('ng2-cli-starter App', function() {
  let page: Ng2CliStarterPage;

  beforeEach(() => {
    page = new Ng2CliStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
