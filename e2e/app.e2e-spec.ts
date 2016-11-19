import { Ng2tweenPage } from './app.po';

describe('ng2tween App', function() {
  let page: Ng2tweenPage;

  beforeEach(() => {
    page = new Ng2tweenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
