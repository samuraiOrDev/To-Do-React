# To Do React App


## Definición

La aplicación consiste en una lista de tareas, donde se pueden añadir, eliminar y marcar como completadas las tareas. Todo utilizando el localStorage para guardar la información de las tareas.

El proyecto se puede dividir en tres partes bien diferenciadas: 

- Maquetación 
- Estructura (Componentes React)
- Lógica/Funcionales

## Maquetación

En este proyecto, se ha utilizado CSS vanilla para la maquetación, lo que significa que se ha trabajado sin la utilización de frameworks de CSS. Esto ha permitido una mayor libertad en la personalización y la creación de un diseño más único y a medida.

Además, se ha desarrollado un diseño responsive, utilizando media queries para adaptar el diseño a diferentes tamaños de pantalla. Esto es importante, ya que permite que el sitio web se vea correctamente en dispositivos móviles y tabletas, además de en pantallas de escritorio.

Se ha utilizado el modelo de caja-flexbox para la distribución de los elementos, lo que ha facilitado la creación de un diseño más ordenado y limpio. Este modelo permite el control de la posición y tamaño de los elementos en función de su contenido y relación con otros elementos.

Por último, se ha utilizado la pseudo-clase ::root para definir las variables de color y algunos valores de altura y anchura. Esto ha permitido una mayor eficiencia en el desarrollo y la capacidad de cambiar fácilmente los valores de estilo en todo el sitio web.

## Estructura: Componentes React

La estructura del proyecto se ha desarrollado utilizando React y se ha aplicado el modelo de componentes para dividir el proyecto en diferentes partes. Esta técnica o patrón ha permitido una mayor organización y escabilidad del proyecto. 

El compoente principal del proyecto se llama `App.tsx` y es donde se agregan el resto de los componentes que conforman la aplicación. Los componentes incluidos son los siguientes: 

* `Logo.tsx`: Componente que contiene el logo de la aplicación.
* `InputTask.tsx`: Componente que contiene el input para añadir tareas.
* `ListTask.tsx`: Componente que contiene la lista de tareas.

Usar este enfoque permite modularizar el código y facilitar su mantenimiento y desarrollo. Además, permite reutilizar componentes en diferentes partes de la aplicación, lo que permite un desarrollo más rápido y eficiente.

### 1.) Logo.tsx
Este componente se encarga de mostrar el logo de la aplicación, utilizando un archivo SVG para su diseño y una cadena de texto para el nombre de la aplicación.

### 2.) InputTask.tsx
El componente InputTask.tsx contiene un campo de entrada de texto y un botón para agregar una nueva tarea. En caso de que el campo esté vacío, se mostrará un mensaje de error en HTML para alertar al usuario.

### 3.) ListTask.tsx
Este componente permite visualizar una lista de tareas, utilizando un componente individual llamado `Task.tsx` para cada una de ellas. `Task.tsx` contiene el código HTML para la representación de cada tarea. Además, ListTask.tsx incluye la estructura HTML para mostrar el número total de tareas y el número de tareas completadas.


Además de los componentes principales mencionados anteriormente, también se han creado otros componentes para la modularización de la aplicación:

- `Delete.tsx:` Este componente representa el icono de eliminar. Se ha creado como un componente SVG para permitir una fácil personalización del estilo.

- `Edit.tsx:` Este componente representa el icono de editar. Al igual que el componente Delete.tsx, se ha creado como un componente SVG para permitir una fácil personalización del estilo.

- `ModalTask.tsx:` Este componente es un modal que permite al usuario actualizar la descripción de una tarea. Se utiliza cuando el usuario hace clic en el botón de editar de una tarea específica. Este componente ha sido creado para mejorar la experiencia de usuario al permitir una edición más fácil y rápida de las tareas.

## Lógica/Funcionalidades

La lógica de la aplicación se ha desarrollado utilizando React y contextAPI. ContextAPI es una API de React que permite el manejo del estado de la aplicación. Esto permite que los datos se puedan compartir entre componentes sin tener que pasarlos manualmente a través de las props.

Se ha creado una contextAPI denominado `LTProvider.tsx` que contiene el estado de la aplicación y las funciones para modificarlo. Este contextAPI se utiliza en el componente principal de la aplicación, `App.tsx`, para proporcionar los estados y las funcionalidad correspondiente, a los componentes secundarios.
También es necesario crear `LTContext.tsx` para definir el tipo de datos que se van a utilizar en el contextAPI y el contexto global del mismo.

La aplicación cuenta con varias funciones, entre ellas:

- `Obtener el valor del LocalStorage al entrar/recargar la app (useEffect):` Esta función se ejecuta al entrar o recargar la aplicación para obtener el valor del LocalStorage. Si el valor del LocalStorage es nulo, no se devuelve ni obtiene nada. Para realizar esta tarea, se utiliza el hooks 'useEffect' y se guarda el valor del array en un estado llamado 'tasks'.

- `Añadir una nueva tarea (handleCreateTask):` Esta función permite añadir una nueva tarea al array de tareas. Se hace uso del hooks 'useState' para guardar el valor del input en un estado llamado `tasks`, y una vez finalizada la tarea, se agrega esta nueva tarea al LocalStorage. Esta función también controla si el input está vacío o no, y en caso de estar vacío, muestra un mensaje de error a través del estado `errorCreateTask`.

- `Eliminar una tarea (handleDeleteTask):` Esta función permite eliminar una tarea del array de tareas mediante el uso de `filter`, que crea un nuevo array de tareas sin la tarea seleccionada. Una vez finalizada esta funcionaliad, se actualize el LocalStorage con el nuevo array de tareas y se actualiza el estado `tasks` con este nuevo array. En resumen, la función uso el método `filter` para eliminar la tarea seleccionada del estado, se guarda el nuevo array de tareas en el LocalStorage y se actualiza el estado `tasks` para reflejar el cambio en la app.

- `Abrir el modal de editar una tarea (handleDeleteTask):` Esta función permite abrir el modal de editar una tarea. Para ello, se utiliza el estado `showModal` y se cambia su valor a `true`. Esto permite que el modal se muestre en la aplicación. Esta función modifica el estado de la tarea seleccionada `stateTask` para que el modal muestre la descripción y el identificador de la tarea seleccionada por el usuario.

- `Guardar tarea editar (handleSaveEdit):` Esta función permite guardar la tarea actualizada en el array de tareas. Para ello, se hace uso de la descripción agregada en el `textarea`del modal y se la asigna dicho valor a la descripción de la tarea. Todo esto genera un nuevo array de tareas que va a ser el que se va a guardar en el LocalStorage y se va a utilizar para actualizar el estado `tasks`. Por último, se cambia el valor del estado `showModal` a `false` para cerrar el modal.


## Tecnologías

- `React:` Librería de JavaScript para crear interfaces de usuario.
- `TypeScript:` Super conjunto de JavaScript que permite añadir tipado estático a JavaScript y otras características.
- contextAPI: API de React que permite el manejo del estado de la aplicación.
- `CSS:` Lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.
- `Vite:` Herramienta de construcción web que permite un desarrollo rápido y eficiente. Utiliza esbuild para la compilación y el empaquetamiento de la aplicación.
- `Eslint:` Herramienta de análisis de código para identificar patrones problemáticos encontrados en el código JavaScript.
