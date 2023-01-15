import '../css/Signup.css';
import Navbar from '../components/Navbar';
import OurStoryCard from '../components/OurStoryCard';
import Header from '../components/Header';
import FooterSignup from '../components/FooterSignup';
import tvscreen from '../assets/images/tv.png' ;
import tvscreenvideo from '../assets/videos/video-tv.mp4' ;
import mobilescreen from '../assets/images/mobile.jpg' ;
import kidspic from '../assets/images/kids.png' ;

function Signup() {
    return (
        <>
            <header id='header' className='h-[80vh] sm:h-[90vh] md:h-[100vh] lg:h-[105vh] border-b-8 border-stone-700 pt-5'>
                <Navbar screen="signup" />
                <Header heading="Unlimited movies, TV shows, and more." para="Watch anywhere. Cancel anytime." />
            </header>
            <OurStoryCard heading="Enjoy on your TV." para="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." image={tvscreen} video={tvscreenvideo} columns={2} order1="1" order2="2" padding="lg:pr-10" section="tv" />
            <OurStoryCard heading="Download your shows to watch offline." para="Save your favorites easily and always have something to watch." image={mobilescreen} columns={2} order1="2" order2="1" padding="lg:pl-10" section="download" />
            <OurStoryCard heading="Watch everywhere." para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." columns={2} order1="1" order2="2" padding="lg:pr-10" section="watch-everywhere" />
            <OurStoryCard heading="Create profiles for kids." para="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." image={kidspic} columns={2} order1="2" order2="1" padding="lg:pl-10" section="kids" />
            <OurStoryCard heading="Frequently Asked Questions" order1="1" order2="2" section="FAQs" />
            <FooterSignup />
        </>
    );
}

export default Signup;