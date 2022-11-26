import { useRouteError } from "react-router-dom";
import err from '../../assets/404.jpg'

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="mt-40 text-2xl text-center">
            <img src={err} alt="" className="w-1/3 mx-auto" />
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}