async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`Error en la red: ${response.status}`);
        }

        const users = await response.json();
        
        users.forEach(user => {
            console.log(`Nombre: ${user.name}, Email: ${user.email}`);
        });
    } catch (error) {
        console.error('Hubo un problema con la petición Fetch:', error);
    }
}

fetchUsers();