import data from './data'
import { catsAndCounts } from './data'
import './CatagoryList.css'



function CatsAndCounts (props) {
    const {category, onClick} = props
    return (
        <div className='CatagoryList'>
        {catsAndCounts.map(obj => {
            const {name, count} = obj
            const className = name === category ? 'selected' : ''
          return (
            <button className={className}
                    onClick={() => onClick(name)}
                    key={obj.name}
            >
              {name}
              <span> {count} </span> 
              </button>
          )
        })}
        </div>
    )


}

export default CatsAndCounts