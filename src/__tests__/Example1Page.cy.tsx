import { Example1Page } from "../pages";
import { mount } from "@cypress/react18";

describe("<Example1>", () => {
  it("mounts and displays the correct heading", () => {
    mount(<Example1Page />);
    cy.get("[data-cy='page-heading']")
      .invoke("text")
      .should("equal", "My Awesome Web Application");
  });
});
