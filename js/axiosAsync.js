"use strict";

const user = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const website = document.getElementById('website');

const getUsers = async () => {
    
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    user.innerHTML = data[0].name;
    username.innerHTML = data[0].username;
    email.innerHTML = data[0].email;
    website.innerHTML = data[0].website;
}

getUsers();