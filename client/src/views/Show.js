import { useState, useEffect } from 'react';
import Axios from 'axios';

const Show = (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/show/${props.id}`)
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
};

export default Show;