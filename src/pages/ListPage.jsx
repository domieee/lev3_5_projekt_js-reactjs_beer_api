import { useState, useEffect } from 'react'
import ListItem from '../components/ListItem/ListItem.jsx'

const ListPage = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, []);

    console.log(items, 'fetched');

    return (
        <>
            {items.map((item, index) => {
                return <ListItem 
                key={index}
                id={item._id}
                imgSrc={item.image_url}
                name={item.name}
                tagline={item.tagline}/>
            })}
        </>
    );
}

export default ListPage;