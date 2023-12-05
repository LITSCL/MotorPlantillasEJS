const express = require('express');

//1. Almacenar el servidor.
const app = express();

//2. Establecer el directorio público.
app.use(express.static("../client"));

//3. Establecer el motor de plantillas.
app.set("view engine", "ejs");

//4. Establecer la carpeta de vistas (Necesario para el motor de plantillas).
app.set('views', '../client');

//5. Renderizar las plantillas EJS.
app.get("/", (request, response) => {
    response.render("index.ejs"); //El método render, permite renderizar una plantilla.
});

app.get("/pagina", (request, response) => {
    response.render("pagina.ejs", { //El primer parámetro indica la plantilla y el segundo parámetro corresponde a un objeto JSON con variables que pueden ser utilizadas en la plantilla.
        valor1: "Valor 1",
        valor2: "Valor 2",
        valor3: "Valor 3"
    });
});

module.exports = app;