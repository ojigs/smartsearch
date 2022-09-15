import { React } from 'react'
import data from './MockData.json'

function List(props) {
    const filteredData = data.filter(el => {
        if (props.input === '') {
            return ""
        } else {
            return el.city.toLowerCase().includes(props.input)
        }
    })

    return (
        <ul className='list'>
            {filteredData.map((item) => (
                <li key={item.id}>{item.city}</li>
            ))}
        </ul>
    )
}

export default List