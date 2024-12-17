import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { todoPage } from "../../support/pageObjects/todoPage.js";

Given("que estoy en la página de TodoMVC", () => {
  todoPage.visit();
});

When("creo una tarea con el nombre {string}", (taskName) => {
  todoPage.addTask(taskName);
});

Then("debería ver la tarea {string} en la lista", (taskName) => {
  todoPage.verifyTaskExists(taskName);
});

When("marco la tarea {string} como completada", (taskName) => {
  todoPage.toggleTaskByName(taskName);
});

Then("debería ver la tarea {string} marcada como completada", (taskName) => {
  todoPage.verifyTaskIsCompleted(taskName);
});

When("edito la tarea {string} a {string}", (oldName, newName) => {
  todoPage.editTaskByName(oldName, newName);
});

When("elimino la tarea {string}", (taskName) => {
  todoPage.deleteTaskByName(taskName);
});

Then("no debería ver la tarea {string} en la lista", (taskName) => {
  todoPage.verifyTaskDoesNotExist(taskName);
});
