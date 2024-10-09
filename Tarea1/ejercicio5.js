let tareas = [];


function agregarTarea(descripcion) {
    const nuevaTarea = {
        descripcion: descripcion,
        completada: false
    };
    tareas.push(nuevaTarea);
    console.log(`Tarea "${descripcion}" agregada.`);
}


function marcarTareaComoCompletada(descripcion) {
    const tarea = tareas.find(t => t.descripcion === descripcion);
    if (tarea) {
        tarea.completada = true;
        console.log(`Tarea "${descripcion}" marcada como completada.`);
    } else {
        console.log(`Tarea "${descripcion}" no encontrada.`);
    }
}


function listarTareasPendientes() {
    console.log("Tareas pendientes:");
    const pendientes = tareas.filter(t => !t.completada);
    if (pendientes.length > 0) {
        pendientes.forEach(t => console.log(`- ${t.descripcion}`));
    } else {
        console.log("No hay tareas pendientes.");
    }
}


function listarTareasCompletadas() {
    console.log("Tareas completadas:");
    const completadas = tareas.filter(t => t.completada);
    if (completadas.length > 0) {
        completadas.forEach(t => console.log(`- ${t.descripcion}`));
    } else {
        console.log("No hay tareas completadas.");
    }
}


agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript");


marcarTareaComoCompletada("Comprar leche");


listarTareasPendientes();
listarTareasCompletadas();
