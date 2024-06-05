import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthPorvider";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                toast.success("Logged Out successfully", {
                    position: "top-center"
                })
            })
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/facilities">Facilities</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">HOMPARK</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg" />
                    </div>
                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-error text-white">Log Out</button>
                        :
                        <div className="flex gap-2">
                            <Link to="/register"><button className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-white hover:text-blue-500 border border-blue-500 text-white font-semibold hidden md:block">Register</button></Link>
                            <Link to="/login"><button className="px-6 py-2 rounded-lg bg-green-500 hover:bg-white hover:text-green-500 border border-green-500 text-white font-semibold">Login</button></Link>
                        </div>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;