import './Header.css'




function Header (props) {
     const {title, productCount, catagoryCount} = props
    return (
        <div className="Header">
            <h1>{props.title}</h1> 
            <p>Products: {props.productCount}</p>
            <p>Catagories: {props.catagoryCount}</p>

        </div>
    )
}



export default Header