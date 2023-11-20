const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';


fetch(apiUrl)
    .then(response => response.json())
    .then(userData => {
        
        const userInfoElement = document.getElementById('userInfo');
        userInfoElement.innerHTML = `
            <p>Nombre: ${userData.name}</p>
            <p>Email: ${userData.email}</p>
            <p>Empresa: ${userData.company.name}</p>
            <!-- Agrega más campos según la estructura de la API -->
        `;
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });