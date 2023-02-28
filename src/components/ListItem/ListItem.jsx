import { Link } from 'react-router-dom'
const ListItem = (item) => {
    console.log(item);
    return (
        <>
            <article>
                <img src={item.imgSrc} alt="" />
                <h1>{item.name}</h1>
                <h2>{item.tagline}</h2>
                <p>Created by {item.name}</p>
                <Link to={`/products/${item.id}`}>Details</Link>
            </article>
        </>
    );
}

export default ListItem;