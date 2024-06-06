import Navbar from "../Home/Shared/Navbar";
import aboutImage from "../../assets/undraw_team_spirit_re_yl1v.svg"

const About = () => {
    return (
        <div>
            <Navbar />
            <h2 className="text-center mt-8 font-bold text-4xl">Learn About Us</h2>
            <div className="flex mt-12 gap-6 flex-col md:flex-row">
                <div className="flex-1">
                    <img src={aboutImage} alt="" />
                </div>
                <div className="flex-1">
                    <p>Welcome to Hompark, where luxury living meets unparalleled excellence. At Hompark, we specialize in offering exclusive, high-end properties that embody sophistication, elegance, and comfort. Our curated portfolio features some of the worlds most prestigious homes, each meticulously chosen for its exceptional design, prime location, and exquisite details. From breathtaking penthouses in the heart of the city to sprawling estates with panoramic views, our properties represent the pinnacle of luxury real estate.

                        With a commitment to personalized service, our experienced team of professionals is dedicated to guiding you through every step of the buying or selling process, ensuring a seamless and bespoke experience. We pride ourselves on our attention to detail, discretion, and deep understanding of the luxury market, which allows us to match discerning clients with their perfect homes.

                        At Hompark, we believe that buying or selling a home is more than just a transaction; it’s a significant milestone in your life. Thats why we go above and beyond to provide exceptional service, leveraging our extensive network and industry expertise to deliver outstanding results. Discover the art of fine living with Hompark, where your dream home becomes a reality. Join us on a journey of luxury, and let us help you find a sanctuary that reflects your unique taste and lifestyle.</p>
                </div>
            </div>
        </div>
    );
};

export default About;