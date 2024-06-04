const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mt-8 rounded-tl-[200px] rounded-br-[200px]">
                <div id="item1" className="carousel-item w-full bg-[url('https://lirp.cdn-website.com/bf4fe880/dms3rep/multi/opt/luxury+real+estate+-+Ranger+Ridge-1920w.jpeg')] bg-center py-[100px] md:py-[200px]">
                    <div className="flex items-center max-w-[620px] mx-auto">
                        <div>
                            <h1 className="md:text-8xl text-5xl font-bold bg-[#00000061] text-white text-center">Be our Guest</h1>
                            <p className="text-xl bg-white text-center uppercase">LIVE like a king in our best houses</p>
                            <div className="text-center mt-8">
                                <button className="uppercase bg-white btn btn-wide">Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full bg-[url('https://www.tomferry.com/wp-content/uploads/2023/05/052523-Blog-Header.jpg')] bg-center">
                    <div className="flex items-center max-w-[620px] mx-auto">
                        <div>
                            <h1 className="md:text-8xl text-5xl font-bold bg-[#00000061] text-white text-center">Explore our Best Villas</h1>
                            <p className="text-xl bg-white text-center uppercase">LIVE like a king in our best houses</p>
                            <div className="text-center mt-8">
                                <button className="uppercase bg-white btn btn-wide">Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full bg-[url('https://www.bankrate.com/2022/09/01101108/luxury-real-estate-157375176.jpg')] bg-center">
                    <div className="flex items-center max-w-[620px] mx-auto">
                        <div>
                            <h1 className="md:text-8xl text-5xl font-bold bg-[#00000061] text-white text-center">Find out The Best Deals From US</h1>
                            <p className="text-xl bg-white text-center uppercase">LIVE like a king in our best houses</p>
                            <div className="text-center mt-8">
                                <button className="uppercase bg-white btn btn-wide">Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full bg-[url('https://mbluxury1.s3.amazonaws.com/2024/02/01151752/luxury-real-estate-website-design-scaled.jpg')] bg-center">
                    <div className="flex items-center max-w-[620px] mx-auto">
                        <div>
                            <h1 className="md:text-8xl text-5xl font-bold bg-[#00000061] text-white text-center">Explore Luxurious Hotels</h1>
                            <p className="text-xl bg-white text-center uppercase">LIVE like a king in our best houses</p>
                            <div className="text-center mt-8">
                                <button className="uppercase bg-white btn btn-wide">Explore Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;