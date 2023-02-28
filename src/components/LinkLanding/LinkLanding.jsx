import { Link } from 'react-router-dom'

const LinkLanding = (params) => {

    console.log(params);
    return ( 
        <Link 
        to={params.refeer}>
            <img src={params.imgUrl} alt="" />
            <h2>{params.header}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt delectus magnam odio facere!</p>
        </Link>
     );
}
 
export default LinkLanding;