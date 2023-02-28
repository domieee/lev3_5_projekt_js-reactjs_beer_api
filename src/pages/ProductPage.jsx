import { useParams } from "react-router-dom";

const ProductPage = () => {

    let params = useParams();
    console.log(params);

    if (params.productId == 'random') {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (
        <>
            <h1>Product Page</h1>
        </>
    );
}

export default ProductPage;