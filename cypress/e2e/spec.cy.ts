describe("My First Test", () => {
  it("Gets, types and asserts", () => {
    // Given
    cy.visit("https://recommendoo.de/");

    // When
    cy.get(".bi-key").click();

    // Then
    cy.url().should("include", "/login");
    cy.get("#username").type("fakeUser").should("have.value", "fakeUser");
  });
});
