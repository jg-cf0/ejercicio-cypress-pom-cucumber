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
    todoPage.toggleTask(0);
    todoPage.getTask(0).should("have.class", "completed");
  });

  it("Desmarcar tarea como completada", () => {
    todoPage.addTask("Tarea a desmarcar");
    todoPage.toggleTask(0); // Marcar como completada
    todoPage.toggleTask(0); // Desmarcar
    todoPage.getTask(0).should("not.have.class", "completed");
  });

  it("Editar tarea", () => {
    todoPage.addTask("Tarea editable");
    todoPage.editTask(0, "Tarea editada");
    todoPage.getTask(0).should("contain.text", "Tarea editada");
  });

  it("Borrar una tarea", () => {
    todoPage.addTask("Tarea a borrar");
    todoPage.deleteTask(0);
    todoPage.getTasks().should("have.length", 0);
  });

  
});
