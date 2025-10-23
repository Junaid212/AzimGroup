import { Fragment } from 'react';
import AboutAreaS6 from '../../components/AboutAreaS6/AboutAreaS6';
import AppArea from '../../components/AppArea/AppArea';
import BlogAreaS4 from '../../components/BlogAreaS4/BlogAreaS4';
import BookingAreaS5 from '../../components/BookingAreaS5/BookingAreaS5';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import CounterArea from '../../components/CounterArea/CounterArea';
import FeatureAreaS2 from '../../components/FeatureAreaS2/FeatureAreaS2';
import FooterAreaS4 from '../../components/FooterAreaS4/FooterAreaS4';
import GalleryAreaS4 from '../../components/GalleryAreaS4/GalleryAreaS4';
import HeaderAreaS3 from '../../components/HeaderAreaS3/HeaderAreaS3';
import HeroAreaS4 from '../../components/HeroAreaS4/HeroAreaS4';
import PricingArea from '../../components/PricingArea/PricingArea';
import RoomsAreaS4 from '../../components/RoomsAreaS4/RoomsAreaS4';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS2 from '../../components/ServiceAreaS2/ServiceAreaS2';
import TeamArea from '../../components/TeamArea/TeamArea';
import TestimonialAreaS4 from '../../components/TestimonialAreaS4/TestimonialAreaS4';
import VideoAreaS2 from '../../components/VideoAreaS2/VideoAreaS2';
import BgShape from '../../img/bg/body-bg_shape.png';


const HomePageS4 = () => {

   return (
      <Fragment>

         <div className="home-luxury-hotel-2 bg-repeat" style={{ backgroundImage: `url(${BgShape})`, backgroundColor: "#0C2830" }}>
            <ColorScheme />
            <HeaderAreaS3 hclass={'th-header header-layout4'} ContactBtn={true} LogoshapeOn={true} />
            <HeroAreaS4 />
            <BookingAreaS5 hclass={'booking-area style3'} />
            <AboutAreaS6 hclass={'overflow-hidden space'} />
            <RoomsAreaS4 hclass={'offer-area5 position-relative overflow-hidden space-bottom overflow-hidden'} />
            <ServiceAreaS2 hclass={'overflow-hidden space-bottom overflow-hidden'} />
            <CounterArea hclass={'counter-area-2 overflow-hidden'} />
            <FeatureAreaS2 hclass={'space overflow-hidden'} />
            <VideoAreaS2 hclass={'video-area-2 react position-relative bg-fixed overflow-hidden background-image '} />
            <TeamArea hclass={'space-top overflow-hidden overflow-hidden'} subClass={'team-content bg-light2'} />
            <PricingArea hclass={'space'} />
            <TestimonialAreaS4 hclass={'overflow-hidden testi-area4 space bg-light2'} />
            <GalleryAreaS4 hclass={'overflow-hidden space'} />
            <AppArea hclass={'appArea position-relative overflow-hidden space-top overflow-hidden bg-fixed background-image'} />
            <BlogAreaS4 hclass={'space'} />
            <FooterAreaS4 hclass={'footer-wrapper footer-layout1 footer-layout1-2 bg-light2'} />
            <Scrollbar />
         </div>

      </Fragment>
   )
}

export default HomePageS4
