"use strict";

const { default: axios } = require("axios");

const getUsers = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => console.log(response))
    .catch((err) => console.log("error", err));
};

getUsers();