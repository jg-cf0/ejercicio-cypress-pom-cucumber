import { todoPage } from "../support/pageObjects/todoPage.js"; // Importamos todoPage de la carpeta especificada

describe("Pruebas Cypress con Page Object Model", () => {
  beforeEach(() => {
    todoPage.visit();
  });

  it("Crear tarea", () => {
    todoPage.addTask("Tarea 1");
    todoPage
      .getTasks()
      .should("have.length", 1)
      .first()
      .should("contain.text", "Tarea 1");
  });

  it("Marcar tarea como completada", () => {
    todoPage.addTask("Tarea a completar");
    todoPage.toggleTaskByName("Tarea a completar");
    todoPage.verifyTaskIsCompleted("Tarea a completar");
  });

  it("Desmarcar tarea como completada", () => {
    todoPage.addTask("Tarea a desmarcar");
    todoPage.toggleTaskByName("Tarea a desmarcar"); // Marcar como completada
    todoPage.toggleTaskByName("Tarea a desmarcar"); // Desmarcar
    todoPage.getTasks()
      .contains("Tarea a desmarcar")
      .parent()
      .should("not.have.class", "completed");
  });

  it("Editar tarea", () => {
    todoPage.addTask("Tarea editable");
    todoPage.editTaskByName("Tarea editable", "Tarea editada"); 
    todoPage.verifyTaskExists("Tarea editada");
  });

  it("Borrar una tarea", () => {
    todoPage.addTask("Tarea a borrar");
    todoPage.deleteTaskByName("Tarea a borrar");
    todoPage.verifyTaskDoesNotExist("Tarea a borrar");
  });
});
