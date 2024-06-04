import { Link } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar />
            <div className="hero mt-14">
                <div className="hero-content w-full flex-col">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold">Create an Account</h1>
                    </div>
                    <div className="card w-full max-w-lg shadow-2xl bg-base-100 mt-6">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="mt-6 text-center">
                                <h2>Already have an account? <Link className="font-bold text-blue-700">Login Now</Link></h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;