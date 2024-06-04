import Banner from "./Banner/Banner";
import Navbar from "./Shared/Navbar";
import StateContainer from "./StateContainer/StateContainer";

const Home = () => {
    return (
        <div className="mt-8">
            <Navbar />
            <Banner />
            <StateContainer />
        </div>
    );
};

export default Home;