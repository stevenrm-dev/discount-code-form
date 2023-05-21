### [ES] Documentación del proyecto...
### [EN] Project documentation...
--Autor: Steven Roldán

## SASS
```
[ES]
La organización de los estilos está basada en la metodología "Atomic Design",
empezando de menor a mayor (átomos -> moléculas -> Organismos), además de
añadir otros estilos que no entran dentro del flujo, como son herramientas (tools);
ajustes (settings), todo agrupado en el documento main.

Añadir que, se ha dispuesto todo bajo el concepto "mobile first", que establece un
desarrollo desde el tamaño menor de dispositivo y seguir incrementalmente, así
adaptar todos los elementos de la mejor forma.

[EN]
The organization of styles are based on the methodology "Atomic Design".
Starting to tiniest until biggest (atoms -> molecules -> organisms),
moreover i added another styles, these don't enter in the flow mentioned before,
they are tools and settings. All grouped to the main document.

Additionally, this project has been created under the concept of "Mobile First",
this define the development from the smallest device and gradually increases,
adapting all elements to the composition.
``` 

# Tools
[ES]
-Variables: Paleta de colores y ajustes de fuentes, tanto las familias, los tamaños, etc.

-Common: Estilos generales de uso global.

-Spaces: Se establecen clases para espacios que se repiten.

[EN]
-Variables: Palette of colors and fonts settings, family, size, etc.

-Common: General styles of regular use.

-Spaces: Classes for recurring size of spaces.

# Settings
[ES]
-Body: Para los ajustes necesarios sobre el body.

-Queries: Aquí se establecen las reglas para una correcta visualización en todos los beakpoints.
Hay que tener en cuenta lo mencionado anteriormente (mobile first), por lo que las reglas se
establecen con "min-width" y no con "max-width".

-Reset: Elimina los estilos que los navegadores añaden por defecto.

[EN]
-Body: Settings about body.

-Queries: The rules for a good display of all breakpoints. We should consider all the points
mentioned before (mobile first), keeping this in mind, all rules have established to
"min-width".

-Reset: Remove all browser's styles assigned by default.

# Components
[ES]
Aquí se encuentran organizados todos los estilos, desde su estado más básico (atoms) al más complejo (organisms).

[EN]
Here we find all styles, from the most basic state (atoms) to the most complex (organisms).

## ASSETS
[ES]
Aquí se almacenan todos los elementos necesarios para realizar la maquetación y que no sean código,
algunos de ellos son, imágenes (img) y fuentes (fonts).

[EN]
Here are saved all necessary elements to realize a layout, these aren't code. Some of them
are images, fonts...

## JS
[ES]
Todos los documentos desarrollados con JavaScript. El código ha sido dividido en varios documentos
para una lectura más cómoda.

[EN]
All documents developed on JavaScript. The code has been divided on several documents for
easy reading.