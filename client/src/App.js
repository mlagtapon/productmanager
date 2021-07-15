import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';
import Main from './views/Main';
// import Create from './views/Create';
import Edit from './views/Edit';
import Show from './views/Show';
import Axios from 'axios';
import './App.css';

function App() {

    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: "",
    })

    const [errors, setErrors] = useState({
        title: "",
        price: "",
        description: "",
    })

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/create', form)
            .then(res => {
                if(res.data.results){
                    navigate('/');
                } else {    
                    console.log(res.data)
                    setErrors(res.data)
                }
            })
    }

    return (
        <div className="App">

        <Router>
            <Main path="/" />
            {/* <Create path="/create" /> */}
            <Show path="/show/:id" />
            <Edit path="/edit/:id" />
        </Router>
        </div>
    );
}

export default App;
