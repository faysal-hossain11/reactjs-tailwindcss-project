
import banner from '../assets/images/banner.png'
import Banner from '../shared/Banner';
import Features from '../components/Header/Features';
import About from '../components/About';

const Home = () => {
    return (
        <div className='mt-28'>
            <Banner banner={banner} heading="Develop your skills without diligence" subHeading="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China." btn1="Get Started" btn2="Discount" />
            {/* this is feature component */}
            <Features />
            {/* This is abodut component */}
            <About />
        </div>
    );
};

export default Home;