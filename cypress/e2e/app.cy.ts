describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows the app title", () => {
    cy.get("[data-cy=app-title]").should("have.text", "Cypress Testing");
  });

  it("renders counter and todo sections", () => {
    cy.contains("h2", "Counter").should("be.visible");
    cy.contains("h2", "Todo List").should("be.visible");
  });
});
