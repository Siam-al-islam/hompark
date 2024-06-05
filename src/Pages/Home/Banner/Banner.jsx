import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const Banner = () => {


    return (
        <div className='mt-8 rounded-3xl md:rounded-br-[200px] md:rounded-tl-[200px] overflow-hidden'>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={true}
                    modules={[Pagination]}
                >
                    <SwiperSlide>
                        <div className="relative">
                            <div className=' max-w-[620px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <h1 className="md:text-8xl text-3xl font-bold bg-[#00000061] text-white text-center">Be Our Guest</h1>
                                <p className="md:text-xl bg-white text-center uppercase">LIVE like a king in our best houses</p>
                                <div className="text-center mt-8">
                                    <button className="uppercase bg-white btn btn-wide">Explore Now</button>
                                </div>
                            </div>
                            <img src='https://lirp.cdn-website.com/bf4fe880/dms3rep/multi/opt/luxury+real+estate+-+Ranger+Ridge-1920w.jpeg' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative">
                            <div className=' max-w-[620px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <h1 className="md:text-8xl text-5xl font-bold bg-[#00000061] text-white text-center">Explore New</h1>
                                <p className="text-xl bg-white text-center uppercase">LIVE like a king in our best houses</p>
                                <div className="text-center mt-8">
                                    <button className="uppercase bg-white btn btn-wide">Explore Now</button>
                                </div>
                            </div>
                            <img src='https://www.bankrate.com/2022/09/01101108/luxury-real-estate-157375176.jpg' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative">
                            <div className=' max-w-[620px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <h1 className="md:text-8xl text-5xl font-bold bg-[#00000061] text-white text-center">Find Out Best Deals</h1>
                                <p className="text-xl bg-white text-center uppercase">LIVE like a king in our best houses</p>
                                <div className="text-center mt-8">
                                    <button className="uppercase bg-white btn btn-wide">Explore Now</button>
                                </div>
                            </div>
                            <img src='https://mbluxury1.s3.amazonaws.com/2024/02/01151752/luxury-real-estate-website-design-scaled.jpg' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;