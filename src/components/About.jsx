
import about from '../assets/images/about.png';
import about2 from '../assets/images/about2.png';
const About = () => {
    return (
        <div>
            <div className=' mt-20 flex flex-col md:flex-row justify-between items-center px-5 md:px-0 gap-5'>
                {/* about image */}
                <div className='md:w-1/2'>
                    <img src={about} alt="about" />
                </div>
                {/* about content */}
                <div className='md:w-1/2'>
                    <h2 className='font-primaryFont lg:text-[52px] md:text-[40px] text-[32px] text-primary mb-5 font-bold leading-[66px]'>We have been improving our product <span className='text-secondary'>for many years.</span></h2>
                    <p className='font-primaryFont lg:text-[24px] text-[18px] text-tartiary mb-[45px] font-medium '>A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.</p>
                    <button className='btnPrimary'>Get Started</button>
                </div>
            </div>

            {/* about part section 2 */}

            <div className=' mt-20 flex flex-col md:flex-row-reverse justify-between items-center px-5 md:px-0 gap-5'>
                {/* about image */}
                <div className='md:w-1/2'>
                    <img src={about2} alt="about" />
                </div>
                {/* about content */}
                <div className='md:w-1/2'>
                    <h2 className='font-primaryFont lg:text-[52px] md:text-[40px] text-[32px] text-primary mb-5 font-bold leading-[66px]'>You can Practice at any <span className='text-secondary'>time convinent for you.</span></h2>
                    <p className='font-primaryFont lg:text-[24px] text-[18px] text-tartiary mb-[45px] font-medium '>A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.</p>
                    <button className='btnPrimary'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;