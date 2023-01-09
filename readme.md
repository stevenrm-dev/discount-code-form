### Documentación del proyecto...
--Autor: Steven Roldán

## SASS
```
La organización de los estilos está basada en la metodología "Atomic Design",
empezando de menor a mayor (átomos -> moléculas -> Organismos), además de
añadir otros estilos que no entran dentro del flujo, como son herramientas (tools);
ajustes (settings), todo agrupado en el documento main.

Añadir que, se ha dispuesto todo bajo el concepto "mobile first", que establece un
desarrollo desde el tamaño menor de dispositivo y seguir incrementalmente, así
adaptar todos los elementos de la mejor forma.
``` 

# Tools
-Variables: Paleta de colores y ajustes de fuentes, tanto las familias, los tamaños, etc.

-Common: Estilos generales de uso general.

-Spaces: Se establecen clases para espacios que se repiten.

# Settings
-Body: Para los ajustes necesarios sobre el body.

-Queries: Aquí se establecen las reglas para una correcta visualización en todos los beakpoints.
Hay que tener en cuenta lo mencionado anteriormente (mobile first), por lo que las reglas se
establecen con "min-width" y no con "max-width".

-Reset: Elimina los estilos que los navegadores añaden por defecto.

# Components
Corresponde a lo mencionado anteriormente, aquí se encuentran organizados todos los estilos,
desde su estado más básico (atoms) al más complejo (organisms).


## ASSETS
Aquí se almacenan todos los elementos necesarios para realizar la maquetación y que no sean código,
algunos de ellos son, imágenes (img) y fuentes (fonts).


## JS
Todos los documentos desarrollados con JavaScript, el código ha sido dividido en varios documentos
para una lectura más cómoda.

-Copy: Hace referencia a todo lo que tiene que ver con la funcionalidad de copiar el código promocional.

-Quiz: Tiene que ver con la lógica que da funcionamiento al cuestionario de preguntas y hace que salte
de una pantalla a otra.

-Timer: Genera, injecta en el HTML y hace funcionar la cuenta atrás que aparece al obtener el código
promocional.

-Listeners: Recoge las funciones que comprueban si los botones han sido pulsados e inicializan el
código del resto de documentos javascript.