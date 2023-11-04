import { mount } from "@cypress/react18";
import { NotFoundPage } from "../pages";

describe("<NotFoundPage>", () => {
  it("mounts", () => {
    mount(<NotFoundPage />);
  });
});
