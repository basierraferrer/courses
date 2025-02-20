<div align="center">

<img alt="Curso de Node.js desde cero y práctico" src="https://github-production-user-asset-6210df.s3.amazonaws.com/1561955/254806429-8ff74316-d49e-4358-8b1e-07d7b5a64ed4.jpeg" width="500">

# Curso de Node.js ❇️

<div align="left">

## API REST

En esta clase se empezó la creación de una API REST usando el framework de `express`. Se uso _CommonJS_ para la creación de los archivos. Se uso la libreria `zod` para validar el esquema de la pelicula para su creación y/o actualización.

- _movies.json_ es la data con la estamos interactuando (DB temporal)
- _app.js_ Archivo principal de la api
- _schemas/movies.js_ Esquema de validación de los datos para la creación y/o actualización de peliculas

### Important

Se explico el uso de los verbos _POST_, _PUT_ y _PATCH_, la diferencia entre ellos, y del tèrmino **idempotencia**.

- `Idempotencia`: Es la propiedad de realizar una acción determinada varias veces y aún así siempre conseguir el mismo resultado.

#### Metodos

- _POST_ : Crea un elemento/recurso en el servidor. Ejemplo **/movies** . _`Este método NO es idempotente, ya que siempre crea un nuevo recurso`_

- _PUT_ : Actualiza totalmente un elemento/recurso o lo crea si no existe. Ejemplo **/movies/:id**. _`Este método SI es idempotente, el resultado siempre será el mismo`_

- _PATCH_ : Actualiza parcialmente un elemento/recurso. Ejemplo **/movies/:id**. _`Este método normalmente SI podría ser idempotente, PERO depende.`_ 

## Ejecutar em dev

1. Clonar repo.
2. Instalar dependencias `npm install`
3. Correr proyecto `npm start`
4. Correr web `npx servor ./web`