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

    function setColor(e) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.color = "#" + randomColor;
      }

    return (
        <ul className='list'>
            {filteredData.map((item) => (
                <li key={item.id} onLoad={setColor}>{item.city}</li>
            ))}
        </ul>
    )
}

export default List