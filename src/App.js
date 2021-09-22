
import './App.css';
import {useState} from 'react'
import data, {allCategories, uniqueCategeories, categoriesAndCounts, catsAndCounts} from './data'
import ProductList from './ProductList'
import CatsAndCounts from './CatsAndCounts'
import Header from './Header.js'
import Inventory from './Inventory.js'



console.log(data)

console.log(allCategories)
console.log(uniqueCategeories)
console.log(categoriesAndCounts)
console.log(catsAndCounts)


function App() {
  const [category, setCategory] = useState('toys')
  
  return (
    <div className= 'App'>
      <Header
        title = "Productify" 
        productCount= {data.length} 
        categoryCount = {uniqueCategeories.length} 
      />

      <CatsAndCounts
       category = {category}
       onClick ={ newCategory => setCategory(newCategory)}
      />

      <ProductList
       category = {category} 
      />

       <Inventory/>      
      </div>  
  );
}

export default App;
