// Custom Cypress commands go here
// Example: cy.addTodo('Buy groceries')

Cypress.Commands.add("addTodo" as any, (text: string) => {
  cy.get("[data-cy=todo-input]").type(text);
  cy.contains("button", "Add").click();
});
