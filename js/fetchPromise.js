const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err));
};

getUsers();