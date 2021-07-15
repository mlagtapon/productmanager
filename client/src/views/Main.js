import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, navigate} from '@reach/router';
import ProductForm from '../components/ProductForm';

const Main = props => {

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

    const [product, setProduct] = useState([]);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:8000/api')
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err))
    }, [deleted])

    const deleteProduct = (product_id) => {
        Axios.delete(`http://localhost:8000/api/delete/${product_id}`)
            .then(res => {
                if(res.data.results){
                    console.log("It deleted!")
                    setDeleted(!deleted);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
        <div>
            <ProductForm 
            form = {form}
            errors = {errors}
            handleForm = {handleForm}
            onSubmit = {onSubmit}
            submitValue="Create"
            />
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th> Title: </th>
                        <th> Price: </th>
                        <th> Description: </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((product, index) => <tr key={index} >
                                                            <td>{product.title}</td>
                                                            <td>{product.price}</td>
                                                            <td>{product.description}</td>
                                                            <td>
                                                                <Link to={`/show/${product._id}`}>Details</Link>
                                                                <Link to={`/edit/${product._id}`}>Update</Link>
                                                                <button onClick={() => deleteProduct(product._id)}>Delete</button>
                                                            </td>
                                                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Main;