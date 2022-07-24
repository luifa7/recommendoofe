describe("In the Login Page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("the user can input the login data", () => {
    // Given
    cy.get('[data-testid="input-username"]');
    cy.get('[data-testid="input-password"]');

    // When
    cy.get('[data-testid="input-username"]').type("fakeUser");
    cy.get('[data-testid="input-password"]').type("password");

    // Then
    cy.get('[data-testid="input-username"]').should("have.value", "fakeUser");
    cy.get('[data-testid="input-password"]').should("have.value", "password");
  });

  it("the user can go to the register page", () => {
    // Given
    cy.get('[data-testid="register-button"]');

    // When
    cy.get('[data-testid="register-button"]').click();

    // Then
    cy.url().should("include", "/register");
  });
});
