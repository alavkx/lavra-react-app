const { it } = require("mocha")

describe("/", () => {
  it("should render", () => {
    cy.visit("/");
  })
})