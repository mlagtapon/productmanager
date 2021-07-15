import { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import Axios from 'axios';
import { navigate, Link } from '@reach/router';

const Edit = props => {
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

    const handleUpdate = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/update/${props.id}`, form)
            .then(res => {
                console.log(res);
                if(res.data.results){
                    navigate('/');
                } else {
                    setErrors(res.data);
                }
            })
    }

    return (
        <div>
            <h4>Edit this product:</h4>
            <ProductForm
                form={form}
                errors={errors}
                handleForm={handleForm}
                submitValue="Edit"
                onSubmit={handleUpdate}
            />
        </div>
    )
}

export default Edit;