import { Link } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthPorvider";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState('');

    const { createUser } = useContext(AuthContext);
    // const { createUserByGoogle, createUserByGithub } = useContext(AuthContext);
    // const { createUserByGithub } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('url');
        const password = form.get('password');

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Your Password should have at least one upper case characters");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError("Your Password should have at least one lowecase case characters");
            return;
        }

        // creating user
        createUser(email, password)
            .then(result => {
                toast.success("Account Created Successfully", {
                    position: "top-center"
                })
                setRegisterError("")
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }




    return (
        <div>
            <Navbar />
            <div className="hero mt-8">
                <div className="hero-content w-full md:flex-row flex-col gap-8">
                    <div className="card w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="text-center mb-4 mt-3 bg-gray-500 text-white py-4">
                            <h1 className="text-4xl font-semibold">Create an Account</h1>
                        </div>
                        <form onSubmit={handleRegister} className="card-body">
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
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        name="password"
                                        className="input input-bordered w-full"
                                        required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-4 text-2xl cursor-pointer">
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaRegEye />
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="mt-6 text-center">
                                {
                                    registerError && <p className="text-red-600">{registerError}</p>
                                }
                                <h2>Already have an account? <Link to="/login" className="font-bold text-blue-700">Login Now</Link></h2>
                            </div>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;