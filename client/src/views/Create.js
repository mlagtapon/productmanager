// import { useState } from 'react';
// import { navigate } from '@reach/router';
// import Axios from 'axios';
// import ProductForm from '../components/ProductForm';

// const Create = props => {
//     const [form, setForm] = useState({
//         title: "",
//         price: 0,
//         description: "",
//     })

//     const [errors, setErrors] = useState({
//         title: "",
//         price: "",
//         description: "",
//     })

//     const handleForm = e => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         })
//     }

//     const onSubmit = e => {
//         e.preventDefault();
//         Axios.post('http://localhost:8000/api/create', form)
//             .then(res => {
//                 if(res.data.results){
//                     navigate('/');
//                 } else {    
//                     console.log(res.data)
//                     setErrors(res.data)
//                 }
//             })
//     }

//     return (
//         <div>
//             <ProductForm 
//             form = {form}
//             errors = {errors}
//             handleForm = {handleForm}
//             onSubmit = {onSubmit}
//             submitValue="Create"
//             />
//         </div>
//     );
// }

// export default Create;