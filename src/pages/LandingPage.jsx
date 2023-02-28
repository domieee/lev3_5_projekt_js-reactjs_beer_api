import LinkLanding from "../components/LinkLanding/LinkLanding.jsx";

const LandingPage = () => {
    return (
        <>
        
            <LinkLanding
            refeer='products'
            imgUrl='https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
            header='All Beer'/>
            <LinkLanding
            refeer='products/random'
            imgUrl='https://images.unsplash.com/photo-1615332579037-3c44b3660b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
            header='Random Beer'/>
        </>
    );
}

export default LandingPage;