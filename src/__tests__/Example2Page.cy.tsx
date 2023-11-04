import { Example2Page } from "../pages";
import { mount } from "@cypress/react18";

describe("<Example2>", () => {
  beforeEach(() => {
    mount(<Example2Page />);
  });

  it("displays the appropriate remaining characters count", () => {
    cy.get("span").invoke("text").should("equal", "15");

    cy.get("input").type("hello");
    cy.get("span").invoke("text").should("equal", "10");

    cy.get("input").type(" my friend ");
    cy.get("span").invoke("text").should("equal", "0");
  });

  it("prevents the user from typing more characters once max is exceeded", () => {
    const mockString = "reeeeealy looooooong string";
    cy.get("input").type(mockString);
    cy.get("input").should("have.attr", "value", mockString.slice(0, 15));
  });
});
