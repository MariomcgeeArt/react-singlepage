import data from './data.json'

export default data

const allCategories = data.map(obj => obj.category)

const cats = allCategories.reduce((acc, cat) => {
    acc[cat] = 0 // [toys; 0, music: 0]
    return acc
}, {})
 

const uniqueCategeories = Object.keys(cats)

const categoriesAndCounts = allCategories.reduce((acc, cat) => {
    if(acc[cat] === undefined) {
        acc[cat] = 1
    } else {
        acc[cat] += 1
    }
    return acc
}, {})


const catsAndCounts = uniqueCategeories.map( name => {
    return { name, count: categoriesAndCounts[name] }
})




export {
    allCategories,
    uniqueCategeories,
    categoriesAndCounts,
    catsAndCounts
    
}