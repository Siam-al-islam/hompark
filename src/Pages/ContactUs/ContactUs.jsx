import { FaFacebook, FaInstagram } from "react-icons/fa";
import contactImage from "../../assets/undraw_contact_us_re_4qqt.svg"
import Navbar from "../Home/Shared/Navbar";

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <h2 className="text-center mt-8 font-bold text-4xl">Contact Us</h2>
            <div className="mt-12 flex  gap-10 flex-col md:flex-row-reverse items-center">
                <div className="flex-1">
                    <button className="btn btn-outline w-full mt-6">
                        <FaFacebook />
                        Find Us On Facebook
                    </button>
                    <button className="btn btn-outline w-full mt-3">
                        <FaInstagram />
                        Find Us On Instagram
                    </button>
                </div>
                <div className="flex-1">
                    <img src={contactImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;