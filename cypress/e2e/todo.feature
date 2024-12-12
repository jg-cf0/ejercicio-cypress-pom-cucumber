Feature: Gestionar tareas en la aplicación TodoMVC

  Scenario: Crear una nueva tarea
    Given que estoy en la página de TodoMVC
    When creo una tarea con el nombre "Tarea 1"
    Then debería ver la tarea "Tarea 1" en la lista

  Scenario: Marcar tarea como completada
    Given que estoy en la página de TodoMVC
    And creo una tarea con el nombre "Tarea a completar"
    When marco la tarea "Tarea a completar" como completada
    Then debería ver la tarea "Tarea a completar" marcada como completada

  Scenario: Desmarcar tarea como completada
    Given que estoy en la página de TodoMVC
    And creo una tarea con el nombre "Tarea a desmarcar"
    And marco la tarea "Tarea a desmarcar" como completada
    When desmarco la tarea "Tarea a desmarcar" como completada
    Then debería ver la tarea "Tarea a desmarcar" marcada como pendiente

  Scenario: Editar una tarea
    Given que estoy en la página de TodoMVC
    And creo una tarea con el nombre "Tarea editable"
    When edito la tarea "Tarea editable" a "Tarea editada"
    Then debería ver la tarea "Tarea editada" en la lista

  Scenario: Borrar una tarea
    Given que estoy en la página de TodoMVC
    And creo una tarea con el nombre "Tarea a borrar"
    When elimino la tarea "Tarea a borrar"
    Then no debería ver la tarea "Tarea a borrar" en la lista
