import data from './data.json'

const key = data.map(obj => obj.id)

function Product (props) {
    const {name, description, price, category, rating} = props
    return (
        <div className='Product' key={key}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <small>Catgegory: {category} Rating: {rating}</small>
    </div>

    )
}


export default Product 