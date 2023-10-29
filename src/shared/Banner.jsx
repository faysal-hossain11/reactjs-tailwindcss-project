import React from 'react';

const Banner = ({banner, heading, subHeading, btn1, btn2}) => {
    return (
        <div>
            <div className='gradientBg rounded-2xl rounded-br-[100px] py-20 px-10'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8 px-5 md:px-0'>
                    {/* banner image */}
                    <div>
                        <img src={banner} alt='banner' />
                    </div>
                    {/* banner content */}
                    <div className='md:w-3/4'>
                        <h2 className='text-white font-bold md:text-7xl text-4xl mb-6 link font-primaryFont'>{heading}</h2>
                        <p className='text-2xl text-paragraph font-medium mb-10'>{subHeading}</p>
                        <div className=' md:space-x-10  flex-col'>
                            <button className='btnPrimary'>{btn1}</button>
                            <button className='btnPrimary'>{btn2}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;