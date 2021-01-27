describe('Home page', function () {
    it('loads properly', function () {
      cy.visit('https://wttech.blog/');
      cy.get('body').happoScreenshot();
    });
  });