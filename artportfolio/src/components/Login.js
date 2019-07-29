import React from 'react';

function login() {
    axios
        .post('https://artportfoliobw.herokuapp.com/login', {
            email: '',
            password: ''
        })
        .then(res => {
            const token = res.data.token;
            localStorage.setItem('token', token);
        })
        .catch(err => {
            console.log(err);
        })
}

export default login;