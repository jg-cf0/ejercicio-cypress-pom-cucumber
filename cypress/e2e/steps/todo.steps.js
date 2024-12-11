import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { todoPage } from "../../support/pageObjects/todoPage.js";

Given("que estoy en la página de TodoMVC", () => {
  todoPage.visit();
});

When("creo una tarea con el nombre {string}", (taskName) => {
  todoPage.addTask(taskName);
});

Then("debería ver la tarea {string} en la lista", (taskName) => {
  todoPage.getTasks().should("contain.text", taskName);
});

When("marco la tarea {string} como completada", (taskName) => {
  todoPage.getTasks()
    .contains(taskName)
    .parent()
    .find(".toggle")
    .click();
});

Then("debería ver la tarea {string} marcada como completada", (taskName) => {
  todoPage.getTasks()
    .contains(taskName)
    .parent()
    .should("have.class", "completed");
});

When("edito la tarea {string} a {string}", (oldName, newName) => {
  todoPage.getTasks()
    .contains(oldName)
    .dblclick();
  cy.focused().clear().type(`${newName}{enter}`);
});

When("elimino la tarea {string}", (taskName) => {
  todoPage.getTasks()
    .contains(taskName)
    .parent()
    .find(".destroy")
    .click({ force: true });
});

Then("no debería ver la tarea {string} en la lista", (taskName) => {
  todoPage.getTasks().should("not.contain.text", taskName);
});
