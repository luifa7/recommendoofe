describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/"); // change URL to match your dev URL
  });

  it("Goes to Login on button click", () => {
    // Given
    cy.visit("/");

    // When
    cy.get(".bi-key").click();

    // Then
    cy.url().should("include", "/login");
    cy.get("#username").type("fakeUser").should("have.value", "fakeUser");
  });
});
