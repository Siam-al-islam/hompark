import Banner from "./Banner/Banner";
import Navbar from "./Shared/Navbar";

const Home = () => {
    return (
        <div className="mt-8">
            <Navbar />
            <Banner />
            <h2 className="text-3xl">This is Home</h2>
        </div>
    );
};

export default Home;