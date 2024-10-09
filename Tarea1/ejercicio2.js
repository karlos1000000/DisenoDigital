function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        // Simular un retraso de 3 segundos
        setTimeout(() => {
            // Generar un número aleatorio
            const numeroAleatorio = Math.floor(Math.random() * 100); // Número entre 0 y 99

            // Determinar si el número es par o impar
            if (numeroAleatorio % 2 === 0) {
                resolve("Consulta exitosa");
            } else {
                reject("Error en la consulta");
            }
        }, 3000); // 3000 milisegundos = 3 segundos
    });
}

// Llamar a la función y manejar el resultado
consultarBaseDeDatos()
    .then((mensaje) => {
        console.log(mensaje); // Mostrar el mensaje de éxito
    })
    .catch((error) => {
        console.error(error); // Mostrar el mensaje de error
    });
