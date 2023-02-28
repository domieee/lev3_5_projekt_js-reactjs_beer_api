import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    let params = useParams();
    const [state, setState] = useState([]);

    useEffect(() => {

        if (params.productId === 'random') {
            fetch('https://ih-beers-api2.herokuapp.com/beers/random')
                .then(res => res.json())
                .then(data => {
                    setState(data)
                })
        } else {
            fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.productId}`)
                .then(res => res.json())
                .then(data => {
                    setState(data)
                })
        }
    }, [])

    console.log(state);

    return (
        <>
            <div>
                <h1>Product Page</h1>
                <img src={state.image_url} alt="" />
                <h1>{state.name}</h1>
                <p>{state.tagline}</p>
                <div>
                    <p>First Brewed</p>
                    <p>{state.first_brewed}</p>
                </div>
                <div>
                    <p>Attenuation Level</p>
                    <p>{state.attenuation_level}</p>
                </div>
                <p>{state.description}</p>
            </div>
        </>
    );
}

export default ProductPage;