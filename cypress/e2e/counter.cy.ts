// In Cypress, cy is the global command object
// cy.visit()   → open a page
// cy.get()     → find an element
// .should()    → assert something
// .click()     → click an element
// .type()      → type into an input

describe("Counter", () => {

  beforeEach(() => {
    cy.visit("/"); // open the app before each test
  });

  it("shows Count: 0 on load", () => {
    cy.get("[data-cy=count-display]").should("have.text", "Count: 0");
  });

  it("clicking Increase adds 1", () => {
    cy.contains("button", "Increase").click();
    cy.get("[data-cy=count-display]").should("have.text", "Count: 1");
  });

  it("clicking Increase 3 times shows Count: 3", () => {
    cy.contains("button", "Increase").click();
    cy.contains("button", "Increase").click();
    cy.contains("button", "Increase").click();
    cy.get("[data-cy=count-display]").should("have.text", "Count: 3");
  });

  it("clicking Decrease makes count go down", () => {
    cy.contains("button", "Increase").click(); // count = 1
    cy.contains("button", "Decrease").click(); // count = 0
    cy.get("[data-cy=count-display]").should("have.text", "Count: 0");
  });

  it("clicking Reset brings count back to 0", () => {
    cy.contains("button", "Increase").click(); // count = 1
    cy.contains("button", "Increase").click(); // count = 2
    cy.contains("button", "Reset").click();    // count = 0
    cy.get("[data-cy=count-display]").should("have.text", "Count: 0");
  });

});
