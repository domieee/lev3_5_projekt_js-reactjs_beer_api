import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    let params = useParams();
    const [state, setState] = useState([]);
    console.log();

    useEffect(()=>{
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
            <h1>Product Page</h1>
        </>
    );
}

export default ProductPage;