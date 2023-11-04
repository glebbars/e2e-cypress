import { Example4Page } from "../pages";
import { mount } from "@cypress/react18";

describe("<Example4>", () => {
  beforeEach(() => {
    mount(<Example4Page />);
  });

  it("sets the header text to the item's name when double clicked", () => {
    cy.get("[data-cy=box-1-items-list] >  :nth-child(2)").then(($span) => {
      cy.get("[data-cy=box-1-items-list] >  :nth-child(2)").dblclick();
      cy.get('[data-cy="box-1-selected-name"]').should(
        "have.text",
        $span.text()
      );
    });
  });

  it("displays the correct count for the number of selected checkboxes", () => {
    cy.get("[data-cy=box-2-checkboxes] > :nth-child(1) input").check();
    cy.get("[data-cy=box-2-checkboxes] > :nth-child(2) input").check();
    cy.get("[data-cy=box-2-checkboxes] > :nth-child(3) input").check();
    cy.get("[data-cy=box-2-checkboxes] > :nth-child(1) input").uncheck();

    cy.get("[data-cy=box-2-selected-count]")
      .invoke("text")
      .should("equal", "2");
  });

  it("displays the name of the currently selected item", () => {
    const optionThreeText = "Option Three";

    cy.get("[data-cy=box-3-dropdown]").select(optionThreeText).debug();

    cy.get("[data-cy=box-3-selected-name]")
      .invoke("text")
      .should("equal", optionThreeText);
  });

  it("displays the name of the most recently hovered item", () => {
    cy.get("[data-cy=box-4-items-list] > :nth-child(2)").trigger("mouseover");

    cy.get("[data-cy=box-4-selected-name]")
      .invoke("text")
      .should("equal", "Option Two");
  });
});
