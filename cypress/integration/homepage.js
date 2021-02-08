describe('Home page', function () {
    it('loads properly', function () {
      cy.visit('https://www.astonmartinartofliving.com/en');


      cy.wait(3500)
      cy.get('body')
      .happoScreenshot()
    });
  });