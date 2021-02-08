describe('Home page', function () {
    it('loads properly', function () {
      cy.visit('https://wttech.blog/');


      cy.wait(3500)
      cy.get('body')
      .happoScreenshot()
      

      cy.wait(1500)
      cy.happoHideDynamicElements({
        selectors: ['.page-title'],
      });

      cy.get('body')
      .happoScreenshot()

      cy.get('header.header')
      .happoScreenshot()

      cy.get('a.navbar-item.relative.hover-border-bottom-swipe-in.pseudo-bg-color-open-source')
      .click()
      .get('body')
      .happoScreenshot()

    });
  });