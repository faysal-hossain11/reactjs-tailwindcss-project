import features from '../../assets/images/features.png'

const Features = () => {
    return (
        <div className="mt-[100px]">
            <div className="flex flex-col lg:flex-row justify-between gap-16">
                <div className="lg:w-1/3 px-5 md:px-0">
                    <h3 className="font-bold text-primary text-3xl lg:w-3/5 font-primaryFont mb-4">Why we are better than others</h3>
                    <p className="text-[16px] font-semibold text-tartiary font-primaryFont">A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”</p>
                </div>
                <div className="w-full lg:w-3/4">
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 px-5 md:px-0'>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow-3xl p-8 flex justify-center items-center h-[400px] hover:-translate-y-5 transition-all duration-500'>
                            <div >
                                <img src={features} alt="" />
                                <h3 className='text-3xl font-bold text-primary mt-5'>Conventient study schedule</h3>
                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] mt-0 md:mt-16 rounded-[35px] shadow-3xl p-8 flex justify-center items-center h-[400px] hover:-translate-y-5 transition-all duration-500'>
                            <div >
                                <img src={features} alt="" />
                                <h3 className='text-3xl font-bold text-primary mt-5'>Conventient study schedule</h3>
                            </div>
                        </div>
                        <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] shadow-3xl p-8 flex justify-center items-center h-[400px] hover:-translate-y-5 transition-all duration-500'>
                            <div >
                                <img src={features} alt="" />
                                <h3 className='text-3xl font-bold text-primary mt-5'>Conventient study schedule</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;