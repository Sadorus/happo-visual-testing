describe('Home page', function () {
    it('loads properly', function () {
      cy.visit('https://wttech.blog/');


      cy.get('body')
      .happoScreenshot()
      
      cy.happoHideDynamicElements({
        selectors: ['div.optanon-alert-box-wrapper'],
      });

      cy.get('body')
      .happoScreenshot()

    });
  });