import { Link, useNavigate } from 'react-router-dom'

const ButtonBack = () => {
    const navigate = useNavigate()

    return (
        <button
        onClick={() => navigate(-1)}
        className="button-bg">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M5 12l6 6"></path>
                <path d="M5 12l6 -6"></path>
            </svg>
        </button>
    );
}

export default ButtonBack;