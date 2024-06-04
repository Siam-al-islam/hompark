import { Link } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar";

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className="hero mt-14">
                <div className="hero-content w-full flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold">Login Now</h1>
                    </div>
                    <div className="card w-full max-w-lg shadow-2xl bg-base-100 mt-6">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="mt-6 text-center">
                                <h2>Do not have an account? <Link to="/register" className="font-bold text-blue-700">Register Now</Link></h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;