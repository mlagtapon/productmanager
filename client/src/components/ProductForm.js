const ProductForm = props => {
    const {form, errors, onSubmit, handleForm, submitValue} = props;

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmit}>
            <p>
                <label> Title: </label>
                <input type="text" name="title" onChange = {handleForm} value={form.title}/>
                <span className="text-danger">{errors.title ? errors.title.message: ""}</span>
            </p>
            <p>
                <label> Price: </label>
                <input type="number" name="price" onChange = {handleForm} value={form.price}/>
                <span className="text-danger">{errors.price ? errors.title.message: ""}</span>
            </p>
            <p>
                <label> Description: </label>
                <input type="text" name="description" onChange = {handleForm} value={form.description}/>
                <span className="text-danger">{errors.description ? errors.title.message: ""}</span>
            </p>
            <input type="submit" value={submitValue} />
            </form>
        </div>
    )
}

export default ProductForm;