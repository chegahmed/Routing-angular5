import { Ng4ComplateGuidePage } from './app.po';

describe('ng4-complate-guide App', () => {
  let page: Ng4ComplateGuidePage;

  beforeEach(() => {
    page = new Ng4ComplateGuidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
