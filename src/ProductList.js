import data from './data'
import './ProductList.css'


function ProductList(props){
    const {category} = props
    return (
        <div className='ProductList'>
            {data.filter(obj => obj.category === category || category === 'All').map(obj => {
                return (
                    <div key={obj.id}>
                        <h2>{obj.name}</h2>
                        <p>{obj.description}</p>
                        <p>{obj.price}</p>
                        <small>Catgagory: {obj.category} Rating: {obj.rating}</small>
                    </div>
                )
            })}
        </div>
    )




}


   

export default ProductList