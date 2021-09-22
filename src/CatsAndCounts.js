import data from './data'
import { catsAndCounts } from './data'
import './CatagoryList.css'



function CatsAndCounts (props) {
    const {category, onClick} = props
    return (
        <div className='CatagoryList'>
        {catsAndCounts.map(obj => {
            const className = obj.name === category ? 'selected' : ''
          return (
            <button className={className}
                    onClick={() => onClick(obj.name)}
                    key={obj.name}
            >
              {obj.name}
              <span> {obj.count} </span> 
              </button>
          )
        })}
        </div>
    )


}

export default CatsAndCounts