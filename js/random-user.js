const loadUsers = () => {
    const url = 'https://randomuser.me/api/?results=10';

    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data.results))
}

const displayData = (users) => {
    console.log(users);
    let count = 1;
    const table = document.getElementById('users');

    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100 text-center">
                <div class="d-flex justify-content-center mt-5">
                    <img src="${user.picture.large}" class="rounded-pill w-50" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                    <p class="card-text mb-1">Email: ${user.email}</p>
                    <p class="card-text mb-1">Phone: ${user.phone}</p>
                    <p class="card-text">Location: ${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
                </div>
            </div>
        `;
        table.appendChild(div);
    });
}

const loadDetails = (idName) => {

}

loadUsers();