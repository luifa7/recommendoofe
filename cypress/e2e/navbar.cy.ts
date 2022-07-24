describe("The navbar icons for unlogged user", () => {
  it("redirects to Home if home-icon clicked", () => {
    // Given
    cy.visit("/login");
    cy.get('[data-testid="home-icon"]');

    // When
    cy.get('[data-testid="home-icon"]').click();

    // Then
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("redirects to About if about-icon clicked", () => {
    // Given
    cy.visit("/");
    cy.get('[data-testid="about-icon"]');

    // When
    cy.get('[data-testid="about-icon"]').click();

    // Then
    cy.url().should("include", "/about");
  });

  it("redirects to Login if login-icon clicked", () => {
    // Given
    cy.visit("/");
    cy.get('[data-testid="login-icon"]');

    // When
    cy.get('[data-testid="login-icon"]').click();

    // Then
    cy.url().should("include", "/login");
  });
});
