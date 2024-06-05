import { Link } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import { ToastContainer, toast } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

    const { signIn, createUserByGoogle, createUserByGithub } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        // sign in user 
        signIn(email, password)
            .then(result => {
                toast.success("Successfully logged In", { position: "top-center" })
                console.log(result);
            })
            .catch(error => {
                toast.error("Wrong password or email", { position: "top-center" })
                console.error(error)
            })
    }

    const handleGoogleSignIn = () => {
        createUserByGoogle();
        toast.success("Logged In successfully", {
            position: "top-center"
        })
    }

    const handleGithubSignIn = () => {
        createUserByGithub();
        toast.success("Logged In Successfully", {
            position: "top-center"
        })
    }

    return (
        <div>
            <Navbar />
            <div className="hero mt-8">
                <div className="hero-content w-full md:flex-row flex-col gap-8">
                    <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="text-center mb-4 mt-3 bg-gray-500 text-white py-4">
                            <h1 className="text-4xl font-semibold">Login Now</h1>
                        </div>
                        <form onSubmit={handleLogin} className="card-body">
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
                            <ToastContainer />
                        </form>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold">Or Login with</h3>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full mt-6">
                            <FaGoogle />
                            Login with Google
                        </button>
                        <button onClick={handleGithubSignIn} className="btn btn-outline w-full mt-3">
                            <FaGithub />
                            Login with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;