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
    And marco la tarea "Tarea a demarcar" como completada
    When desmarco la tarea "Tarea a demarcar" como completada
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

  Scenario: Filtrar tareas alternando entre All, Active, Completed
    Given que estoy en la página de TodoMVC
    And creo una tarea con el nombre "Tarea 1"
    And creo una segunda tarea con el nombre "Tarea 2"
    And marco como completa "Tarea 1"
    When clico el filtro "All"
    Then debería tener dos tareas pendientes
    When clico el filtro "Active"
    Then debería tener una tarea pendiente
    When clico el filtro "Completed"
    Then debería tener una tarea completada
    When clico el filtro "All"
    Then debería tener dos tareas pendientes

  Scenario: Añadir tarea con un solo carácter
    Given que estoy en la página de TodoMVC
    When creo una tarea con el nombre "a"
    Then debería ver la tarea "a" en la lista
    And lista debería tener longitud 1

  Scenario: Añadir tarea con espacios antes del texto
    Given que estoy en la página de TodoMVC
    When creo una tarea con el nombre "      texto"
    Then debería ver la tarea "      texto" en la lista

  Scenario: Añadir tarea que contenga caracteres especiales
    Given que estoy en la página de TodoMVC
    When creo una tarea con el nombre "!@#$%^&*()_+[]{}|;:',.<>?/`~"
    Then debería ver la tarea "!@#$%^&*()_+[]{}|;:',.<>?/`~" en la lista

  Scenario: Crear tarea duplicada
    Given que estoy en la página de TodoMVC
    And creo una tarea con el nombre "Tarea duplicada"
    When creo una tarea con el nombre "Tarea duplicada"
    Then debería ver dos tareas "Tarea duplicada" en la lista

  Scenario: Mantener tareas al recargar la página
    Given que estoy en la página de TodoMVC
    And creo una tarea con el nombre "Tarea 1"
    And creo una tarea con el nombre "Tarea 2"
    And creo una tarea con el nombre "Tarea 3"
    When recargo la página de TodoMVC
    Then debería ver las tres tareas creadas en la lista

  Scenario: Añadir tarea con caracteres específicos de varios idiomas
    Given que estoy en la página de TodoMVC
    When creo una tarea con el nombre "Tarea con acentos áéíóú y caracteres especiales ñçªº"
    Then debería ver la tarea "Tarea con acentos áéíóú y caracteres especiales ñçªº" en la lista

  Scenario: Añadir una tarea con texto extremadamente largo
    Given que estoy en la página de TodoMVC
    When creo una tarea con texto que contenga 1000 caracteres
    Then debería ver una tarea con texto que contenga 1000 caracteres en la lista

  Scenario: Añadir 500 tareas
    Given que estoy en la página de TodoMVC
    When creo 500 tareas con nombre "Tarea (i)"
    Then debería ver 500 tareas numeradas con nombre "Tarea (i)"