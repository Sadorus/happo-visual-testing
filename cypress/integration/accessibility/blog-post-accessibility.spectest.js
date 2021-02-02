import 'cypress-axe'

describe('Accessibility', function () {
  it('Has no detectable a11y violations on load', function () {
    cy.visit('https://wttech.blog/blog/2021/azure-custom-vision-integration-with-video-indexer/')
    cy.injectAxe() // make sure axe is available on the page
    cy.checkA11y() // fail for a11y violations
  });
});