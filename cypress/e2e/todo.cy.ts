describe("Todo List", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("shows 2 todos by default", () => {
    cy.get("[data-cy=todo-item]").should("have.length", 2);
  });

  it("shows the default todo text", () => {
    cy.contains("Buy milk").should("be.visible");
    cy.contains("Go for a walk").should("be.visible");
  });

  it("can add a new todo", () => {
    cy.get("[data-cy=todo-input]").type("Learn Cypress");
    cy.contains("button", "Add").click();

    cy.contains("Learn Cypress").should("be.visible");
    cy.get("[data-cy=todo-count]").should("have.text", "Total todos: 3");
  });

  it("input clears after adding a todo", () => {
    cy.get("[data-cy=todo-input]").type("Some task");
    cy.contains("button", "Add").click();
    cy.get("[data-cy=todo-input]").should("have.value", "");
  });

  it("empty input does NOT add a todo", () => {
    cy.contains("button", "Add").click();
    cy.get("[data-cy=todo-item]").should("have.length", 2);
  });

  it("can delete a todo", () => {
    cy.get("[data-cy=todo-item]")
      .contains("Buy milk")
      .parent()
      .contains("button", "Delete")
      .click();

    cy.contains("Buy milk").should("not.exist");
    cy.get("[data-cy=todo-count]").should("have.text", "Total todos: 1");
  });

});
