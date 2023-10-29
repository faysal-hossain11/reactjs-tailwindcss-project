
import banner from '../assets/images/banner.png'
import Banner from '../shared/Banner';
import About from '../components/About';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Newsletter from '../components/Newsletter';


const Home = () => {
    return (
        <div className='mt-28'>
            <Banner banner={banner} heading="Develop your skills without diligence" subHeading="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China." btn1="Get Started" btn2="Discount" />
            {/* this is feature component */}
            <Features />
            {/* This is abodut component */}
            <About />
            {/* This is pricing component */}
            <Pricing />
            {/* This is newsletter compoent */}
            <Newsletter />
        </div>
    );
};

export default Home;