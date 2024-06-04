import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto font-poppins px-3">
                <Outlet />
            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
};

export default Root;