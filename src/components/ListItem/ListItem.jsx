import { Link } from 'react-router-dom'
import './ListItem.css'

const ListItem = (item) => {
    console.log(item);
    return (
        <>
            <article className='listItem'>
                <div className="img-container">
                    <img src={item.imgSrc} alt="" />
                </div>
                <div className='listItem-text'>
                    <h1>{item.name}</h1>
                    <h2>{item.tagline}</h2>
                    <p>Created by {item.name}</p>
                    <Link
                    className='details'
                    to={`/products/${item.id}`}>Details</Link>
                </div>
            </article>
        </>
    );
}

export default ListItem;