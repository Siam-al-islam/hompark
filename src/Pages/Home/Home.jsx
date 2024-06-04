import Banner from "./Banner/Banner";
import Navbar from "./Shared/Navbar";
import StateContainer from "./StateContainer/StateContainer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <StateContainer />
        </div>
    );
};

export default Home;