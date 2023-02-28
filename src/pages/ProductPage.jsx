import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonBack from "../components/ButtonBack/ButtonBack";
import './ProductPage.css'

const ProductPage = () => {

    let params = useParams();
    const [state, setState] = useState([]);

    useEffect(() => {

        if (params.productId === 'random') {
            fetch('https://ih-beers-api2.herokuapp.com/beers/random')
                .then(res => res.json())
                .then(data => {
                    setState(data)
                    return data
                })
        } else {
            fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.productId}`)
                .then(res => res.json())
                .then(data => {
                    setState(data)
                    return data
                })
        }
    }, [params.productId])

    console.log(state);

    return (
        <>
            <div className="product-container">
                <div className="img-product">
                 <img src={state.image_url} alt="" />
                </div>

                <h2>{state.name}</h2>
                <p className="tagline">{state.tagline}</p>
                <div className="productDesc">
                    <p>First Brewed</p>
                    <p>{state.first_brewed}</p>
                </div>
                <div className="productDesc">
                    <p>Attenuation Level</p>
                    <p>{state.attenuation_level}</p>
                </div>
                <p>{state.description}</p>
                <ButtonBack/>
            </div>
        </>
    );
}

export default ProductPage;