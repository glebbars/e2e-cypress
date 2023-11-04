import { Example3Page } from "../pages";
import { mount } from "@cypress/react18";

describe("<Example3>", () => {
  beforeEach(() => {
    mount(<Example3Page />);

    // aliases
    cy.get("[data-cy='last-name-chars-left-count']").as("charsLeftSpan");
    cy.get("[data-cy='input-last-name']").as("charsInput");
  });

  it("displays the appropriate remaining characters count", () => {
    cy.get("@charsLeftSpan").invoke("text").should("equal", "15");

    cy.get("@charsInput").type("hello");
    cy.get("@charsLeftSpan").invoke("text").should("equal", "10");

    cy.get("@charsInput").type(" my friend ");
    cy.get("@charsLeftSpan").invoke("text").should("equal", "0");
  });

  it("prevents the user from typing more characters once max is exceeded", () => {
    const mockString = "reeeeealy looooooong string";

    cy.get("@charsInput").type(mockString);
    cy.get("@charsInput").should("have.attr", "value", mockString.slice(0, 15));
  });
});
