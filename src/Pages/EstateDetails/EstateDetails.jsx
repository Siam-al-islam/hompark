// import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar";
import Data from "../../../public/estateData.json";

const EstateDetails = () => {
    const estate = Data;
    const { id } = useParams();
    const idInt = parseInt(id);
    const estateData = estate.find(item => item.id == idInt);
    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = estateData;

    return (
        <div>
            <Navbar />
            <div className="flex flex-col md:flex-row gap-10 mt-12 items-center">
                <div className="flex-1">
                    <img src={image} alt="" />
                </div>
                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-semibold ">{estate_title}</h1>
                    <p className="font-semibold">Type: {segment_name}</p>
                    <p className="text-green-600">For: {status}</p>
                    <p className="text-2xl text-orange-600 font-semibold">Price: {price}</p>
                    <p className="text-gray-600">Location: {location}</p>
                    <p className="text-xl">Area: {area} sq ft</p>
                    <p className="text-gray-600">Details: {description}</p>
                    <div className="mt-4">
                        You will get these extra facilities:
                        <ol>
                            {
                                facilities.map((item, idx) => <li className="font-semibold mt-2" key={idx}>{item}</li>)
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;