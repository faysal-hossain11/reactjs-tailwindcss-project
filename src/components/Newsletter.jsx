import Banner from "../shared/Banner";
import bannerImg from '../assets/images/newsletter.png'

const Newsletter = () => {
    return (
        <div className=" mt-28 mb-14">
            <Banner banner={bannerImg} heading="Each student an share their discount code for friends" subHeading="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”" btn1="I have a code" />
        </div>
    );
};

export default Newsletter;