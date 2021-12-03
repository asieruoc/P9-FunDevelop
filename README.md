# FUN DEVELOP

Bienvenidos a nuestro proyecto! Este proyecto esta basado en un juego de conquista donde cada jugador deberá conquistar casillas del tablero. Ganará el jugador que conquiste más casillas.

## SOFTWARE USADO  🛠️
Hemos usado el siguiente software:
- **Mockplus:** Software usado para realizar el mockup o prototipo del proyecto.
- **Lucidchart:** Sofware usado para realizar el diagrama de clases.
- **IDE:** El IDE que hemos usado para la implementación del proyecto ha sido IntelliJ y Visual Studio Code.
- **Google Chrome:** Navegador web.
- **GitHub**: Usado para la creación de nuestro repositorio.

# DETALLE DE LA IMPLANTACIÓN

En este apartado explicaremos los detalles más relevantes de nuestra código.

## ESTRUCTURA DEL PROYECTO 📂

Hemos estructurado el proyecto de la siguiente manera:

-   **Carpeta Config:** Donde almacenamos los ficheros de configuración de la aplicación.
-   **Carpeta Public:**  Donde almacenamos las vistas, lógica y modelo cumpliendo con la estructura MVC.
-   **Carpeta Router:**  Donde almacenamos las funciones de enrutado.


# FRAMEWORKS Y API'S USADOS

Los frameworks y APIs usados mas importantes para este proyecto han sido:
- **Node.js**: Es un entorno en tiempo de ejecución multiplataforma para la capa del servidor (en el lado del servidor) basado en JavaScript.
- **DOM:** Estándar que nos ayuda a representar un documento en HTML.
- **Bootstrap:** Framework usado para crear el diseño responsive del proyecto.
- **API HTML5 Webstorage:** Permite a las páginas web almacenar información en la parte del cliente
- **API HTML5 D&D:** Mecanismo basado en eventos, donde identificamos los elementos que deseamos arrastrar para posteriormente proporcionar la funcionalidad deseada.

# NODE.JS
Node.js es una plataforma que se usa principalmente para desarrollar aplicaciones web utilizando JavaScript en el servidor. Sus ventajas mas importantes son:
- Es rápido, se ejecuta en el motor V8 de Google.
- Está construido para funcionar de manera asíncrona.
- Es una excelente opción para aplicaciones en tiempo real.
- Funciona a la perfección con bases de datos no relacionales.
- Se puede usar el mismo lenguaje para backend y frontend.

# DOM

 **DOM (Document Object Model):** Es un estándar que nos ayuda a representar un documento en HTML. Esa página se representa en el DOM como un árbol genealógico. La manera de mostrar información en la pantalla, crearla, modificarla, añadirla o borrarla es por medio del DOM donde manejaremos las salidas y toda la manipulación del documento.
 - **Selección de los elementos (nodos)**:
		
	 -  `document.getElementById("identificador)`:  Seleccionamos un elemento por medio del identificador. Una vez seleccionado podemos hacer lo que queramos.
	 - `document.getElementsByTagName("etiqueta")`: Seleccionamos todos los objetos que tengan la etiqueta h1, p... y el resultado lo entrega en un array.
	 - `document.getElementsByClassName("clase")`: Selección de nodos por clase. Nos devuelve un array o "nodeList" con los elementos que tiene un clase.
	 - `document.querySelector()`: Seleccionamos por clase, identificador, atributo o pseudoclase (CSS). Nos devuelve un elemento.
	 - `document.querySelectorAll()`: Seleccionamos por clase, identificador, atributo o pseudoclase (CSS). Nos devuelve un array o un "nodeList" con los elementos.
	
 - **Modificación de los elementos (nodos)**:
	 - `miElemento.getAttribute()`: Recuperamos el valor del atributo.
	 - `miElemento.setAttribute()`: Modificamos el valor del atributo.
	 - `miElemento.removeAttribute()`: Eliminamos el atributo.
	 - `miElemento.hasAttribute()`: Nos devuelve un verdardero si existe el atributo o un false si no existe.

 - **Manipular información de un nodo**:
	 - `innerHTML`: Recuperamos información, modificamos o eliminamos. 
		Ejemplo de Recuperación de información de un nodo:
		*var d = document.querySelector("class").innerHTML;*
		Ejemplo de Modificación de contenido:
		*var d = document.querySelector(class).innerHTML = modificación;*
		Ejemplo de Borrado del contenido:
		*var d = document.querySelector(class).innerHTML = "";*
		
 - **Crear elementos del DOM**:
	 - `document.createElement("li")`: Creamos el elemento o nodo.
	 - `miElemento.appendChild(nuevoElemento)`: Añadimos el nodo.
	 - `nuevoElemento.innerHTML = "Texto"`: Llenamos de contenido el nodo.
	 - `parent.insertBefore(newEle, existingEle)`: Inserta antes del nodo.

# BOOTSTRAP
Bootstrap es uno de los **_frameworks_** más populares para el desarrollo del **_frontend_** de páginas web. La herramienta proporciona plantillas para CSS y HTML que facilitan la colocación y el diseño de la página, las fuentes, los botones y los elementos.

Desctacamos a continuación, algunas de las propiedades y clases usadas en nuestro proyecto:

- **Layout**: Hemos usado la clase **Container** que són bloques de construcción que contienen, rellenan y alinean su contenido dentro de un dispositivo o ventana gráfica determinada.

- **El sistema de cuadrícula, Grid**: Este sistema de Bootstrap utiliza una serie de contenedores, **filas y columnas** para diseñar y alinear el contenido.
Este sistema de cuadrícula puede adaptarse a los seis puntos de interrupción o breakpoints predeterminados y a cualquier punto de interrupción que personalice. Los seis niveles de cuadrícula predeterminados son los siguientes: 
	- Extra pequeño (xs): <576px
	- Pequeño (sm): ≥576px
	- Medio (md): ≥768px
	- Grande (lg): ≥992px
	- Extra grande (xl): ≥1200px
	- Extra extra grande (xxl): ≥1400px

	Teniendo en cuenta estos **breakpoints** y propiedades importantes 		como `background-size:cover` podemos realizar un diseño responsive que 	se adapte a cualquier resolución de pantalla.

- **Forms**: Hemos usado la clase **form-Control** para los controles de formulario, la clase **form-check** para garantizar márgenes adecuados para las etiquetas y casillas de verificación.
	
# API HTML5 WEBSTORAGE

Esta es una de las especificaciones incluidas en la parte de Javascript de HTML5, que permite a las páginas web almacenar información en la parte del cliente, es decir, el navegador web.
Webstorage se divide en dos vertientes, el "SessionStorage", para guardar información que caducará al final de la sesión y el "LocalStorage", que permite almacenar datos que perduren entre distintas visitas del mismo usuario al sitio web.
En nuestro proyecto hemos usado LocalStorage.
- **Métodos de storage:**
	- `setItem (clave, valor)`: Almacena un par clave/valor.
	- `getItem(clave)`: Obtiene el valor por medio de la clave.
	- `removeItem(clave)`: Elimina la clave y su valor.
	- `clear()`:  Borra todo.
	- `key(índice)`: Obtiene la clave de una posición dada.
	- `length`: El número de ítems almacenados.
**- Ejemplos usados en nuestro proyecto:**
		- `localStorage.setItem("userData", JSON.stringify(userPrefs);`: Para guardar el ítem.
		- `localStorage.getItem("userData");`: Para coger el ítem guardado anteriormente.

# API HTML5 D&D

Esta API se define como un mecanismo basado en eventos, donde identificamos los elementos que deseamos arrastrar con el atributo `draggable` y desde JavaScript escuchamos los eventos que se producen, para proporcionar la funcionalidad deseada.

La utilidad de esta API es permitir a un usuario que visita nuestra pagina web la posibilidad de que arrastre elementos dentro de la misma.

Los **objetos que participan** en esta API són:
- El **objeto de destino** que tiene disponibles los siguientes eventos:
	- `Dragenter`: cuando el ratón entra en el área de destino.
	- `Dragover`: cuando el ratón se mueve sobre el área de destino.
	- `Drop`: cuando el elemento es soltado en el área de destino
	-  `Dragleave`: cuando el elemento arrastrado sale del área de destino.
- El **objeto a arrastrar** que tiene disponibles los siguientes eventos:
	- `Dragstar`: desencadena la acción al comenzar a arrastrar.
	-  `Drag`: desencadena la acción durante la operación de arrastre.
	- `Dragend`: desencadena la acción al terminar de arrastrar.

Estos dos objetos se deben preparar para establecer que información van a compartir entre ellos mediante el objeto dataTransfer y sus métodos:
- `setData`: declara qué datos serán transferidos. Este metodo se utiliza en el objeto que vamos a arrastrar.
- `getData`: declara qué datos serán capturados. Indicamos que información capturaremos del objeto arrastrado.


# AUTORES ✒️

-   Asier Uruñuela -  [aurunuelas@uoc.edu](mailto:aurunuelas@uoc.edu)
-   Sofia Figueroa -  [sfigueroaa@uoc.edu](mailto:sfigueroaa@uoc.edu)
-   Francisca María Rodríguez - [frodriguezvaz@uoc.edu](mailto:frodriguezvaz@uoc.edu)
-   Jordi Molet -  [jmoletr@uoc.edu](mailto:jmoletr@uoc.edu)


# WEBGRAFÍA 🌍
- [Curso NodeJS](https://www.youtube.com/watch?v=fLZ3L9MIXAQ&list=PLpOqH6AE0tNjx0SzNvlsP9-JGJ0zmuFnS), publicado por codigofacilito.
- [Cree sitios rápidos y receptivos con Bootstrap](https://getbootstrap.com/), publicado en getbootstrap.com
- [Aprende Javascript, HTML5 y CSS3](https://www.udemy.com/courses/search/?src=ukw&q=Aprende%20Javascript,%20HTML5%20y%20CSS3), curso de Udemy impartido por Francisco Javier Arce Anguiano.
- [LocalStorage, sessionStorage,](https://es.javascript.info/localstorage) publicado por JavaScript.info
- [API HTML5 WebStorage](https://desarrolloweb.com/articulos/api-html5-webstorage.html), publicado por desarrollowe6.com
- [Window.localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage), publicado por MDN Web Docs.
- [HTML 5](https://www.arkaitzgarro.com/html5/capitulo-10.html), publicado por ArkaitzGarro.com
- [Curso HTML5 API Drag and Drop I video 39](https://www.youtube.com/watch?v=lex-JCYuYEo), publicado por pildorasinformaticas.
