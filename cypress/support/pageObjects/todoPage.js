export class TodoPage {
  visit() {
    cy.visit("https://todomvc.com/examples/react/dist/#/");
  }

  addTask(taskName) {
    cy.get(".new-todo").type(`${taskName}{enter}`);
  }

  getTasks() {
    return cy.get(".todo-list li");
  }

  getTask(index) {
    return cy.get(".todo-list li").eq(index);
  }

  toggleTaskByName(taskName) {
    this.getTasks().contains(taskName).parent().find(".toggle").click();
  }

  deleteTaskByName(taskName) {
    this.getTasks().contains(taskName).parent().find(".destroy").click({ force: true });
  }
  
  editTaskByName(oldName, newName) {
    this.getTasks()
      .contains(oldName)
      .dblclick(); // Activa el modo de edición
    cy.focused().clear().type(`${newName}{enter}`); // Edita el contenido
  }

  verifyTaskExists(taskName) {
    this.getTasks().should("contain.text", taskName);
  }

  verifyTaskIsCompleted(taskName) {
    this.getTasks()
      .contains(taskName)
      .parents("li") // Asegúrate de ir al elemento "li" contenedor
      .should("have.class", "completed");
  }  

  verifyTaskDoesNotExist(taskName) {
    this.getTasks().should("have.length", 0); // Verificar que la lista esté vacía
  }  

  filterBy(filterName) {
    cy.get(".filters").contains(filterName).click();
  }

  reloadPage() {
    cy.reload();
  }
}

export const todoPage = new TodoPage();
