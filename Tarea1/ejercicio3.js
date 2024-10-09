function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroAleatorio = Math.floor(Math.random() * 100);
            if (numeroAleatorio % 2 === 0) {
                resolve("Consulta exitosa");
            } else {
                reject("Error en la consulta");
            }
        }, 3000);
    });
}


async function ejecutarConsulta() {
    try {
       
        const resultado = await consultarBaseDeDatos();
        console.log(resultado); 
    } catch (error) {
        
        console.error(error); 
    }
}

ejecutarConsulta();
