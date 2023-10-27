import React from 'react';
import banner from '../assets/images/banner.png'

const Home = () => {
    return (
        <div className='mt-24'>
            <div className='gradientBg rounded-2xl rounded-br-[100px] py-20 px-10'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8 px-5 md:px-0'>
                    {/* banner image */}
                    <div>
                        <img src={banner} alt='banner' />
                    </div>
                    {/* banner content */}
                    <div className='md:w-3/4'>
                        <h2 className='text-white font-bold md:text-7xl text-4xl mb-6 link font-primaryFont'>Develop your skills without diligence</h2>
                        <p className='text-2xl text-paragraph font-medium mb-10'>A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.</p>
                        <div className=' space-x-10'>
                            <button className='text-white text-2xl px-10 py-4 bg-pink'>Get Started</button>
                            <button className='text-white text-2xl px-10 py-4 bg-pink'>Discount</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;