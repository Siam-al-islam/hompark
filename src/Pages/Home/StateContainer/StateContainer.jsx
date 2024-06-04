import { useEffect, useState } from "react";
import SingleStateCard from "../SingleStateCard/SingleStateCard";

const StateContainer = () => {
    const [estateData, setEstateData] = useState([]);

    useEffect(() => {
        fetch('estateData.json')
            .then(res => res.json())
            .then(data => setEstateData(data))
    }, []);

    return (
        <div className="mt-12">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-bold text-4xl">Top pick villas</h2>
                <p className="mt-4">Discover the Top Pick Villas featuring exquisite design, luxurious amenities, and stunning locations for an unparalleled living experience.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                {
                    estateData.map(estate => <SingleStateCard
                        key={estate.id}
                        estate={estate}
                    />)
                }
            </div>
            <div className="text-center mt-10">
                <button className="btn btn-wide btn-outlin border bg-white border-blue-600 text-blue-600">View More</button>
            </div>
        </div>
    );
};

export default StateContainer;