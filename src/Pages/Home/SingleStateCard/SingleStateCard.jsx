import { FaLocationArrow } from "react-icons/fa";

const SingleStateCard = ({ estate }) => {
    const { image, estate_title, id, segment_name, description, price, status, area, location, facilities } = estate;
    return (
        <div className="border border-[#0000002f] rounded-lg p-4">
            <img className="rounded-lg" src={image} alt="" />
            <div className="flex justify-between mt-4">
                <div className="flex gap-2 items-center">
                    <FaLocationArrow />
                    <h3 className="font-semibold">{location}</h3>
                </div>
                <h3>For: <span className="font-semibold">{status}</span></h3>
            </div>
            <h2 className="font-bold text-2xl mt-3">{estate_title}</h2>
            <h2 className="text-xl text-orange-600 mt-3">Price: {price}</h2>
            <p className="mt-2">{description}</p>
            <h3 className="mt-2 font-semibold">Total Area: {area} Sq ft</h3>
            <div className="mt-3">
                {facilities.map((item, idx) => <p key={idx}>{item}</p>)}
            </div>
            <button className="btn w-full bg-orange-600 text-white mt-6">View Property</button>
        </div>
    );
};

export default SingleStateCard;