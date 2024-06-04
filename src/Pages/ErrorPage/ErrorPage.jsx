import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="text-center mt-32">
            <h1 className="text-3xl">{error.status}</h1>
            <p className="text-xl">{error.statusText}</p>
            <Link to="/" className="btn mt-8 btn-wide bg-red-700 text-white">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;