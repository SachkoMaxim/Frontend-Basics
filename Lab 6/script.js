document.getElementById('getInfo').addEventListener('click', () => {
    const apiURL = 'https://randomuser.me/api/?results=5';

    fetchUsers(apiURL)
        .then(users => displayUsers(users))
        .catch(error => sendError(error));
});

function fetchUsers(URL) {
    return fetch(URL)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Помилка отримання даних: ${response.status}`);
            }  
        })
        .then(data => data.results)
        .catch(error => {
            throw new Error(`Помилка отримання даних: ${error.message}`);
        });
}

function displayUsers(users) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = '';

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
            <img src="${user.picture.large}" alt="User Picture">
            <p><strong>Ім'я:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Телефон:</strong> ${user.phone}</p>
            <p><strong>Місто:</strong> ${user.location.city}</p>
        `;

        userContainer.appendChild(userCard);
    });
}

function sendError(error) {
    console.error('Помилка:', error.message);
}
