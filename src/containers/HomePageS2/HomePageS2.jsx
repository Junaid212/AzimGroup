import { Fragment } from 'react';
import AboutAreaS3 from '../../components/AboutAreaS3/AboutAreaS3';
import AboutAreaS4 from '../../components/AboutAreaS4/AboutAreaS4';
import BlogAreaS2 from '../../components/BlogAreaS2/BlogAreaS2';
import BookingArea from '../../components/BookingArea/BookingArea';
import BookingAreaS2 from '../../components/BookingAreaS2/BookingAreaS2';
import BrandAreaS2 from '../../components/BrandAreaS2/BrandAreaS2';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterAreaS2 from '../../components/FooterAreaS2/FooterAreaS2';
import GalleryAreaS2 from '../../components/GalleryAreaS2/GalleryAreaS2';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import HeroAreaS2 from '../../components/HeroAreaS2/HeroAreaS2';
import OfferAreaS2 from '../../components/OfferAreaS2/OfferAreaS2';
import RoomsAreaS2 from '../../components/RoomsAreaS2/RoomsAreaS2';
import RoomsAreaS3 from '../../components/RoomsAreaS3/RoomsAreaS3';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import TestimonialAreaS2 from '../../components/TestimonialAreaS2/TestimonialAreaS2';
import VideoArea from '../../components/VideoArea/VideoArea';

const HomePageS2 = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1 header-layout2'} RoomBtn={true} />
         <HeroAreaS2 />
         <BookingArea hclass={'booking-area'} />
         <AboutAreaS3 hclass={'overflow-hidden space'} />
         <RoomsAreaS3 hclass={'overflow-hidden space-bottom'} />
         <VideoArea hclass={'video-area  bg-fixed background-image'} />
         <OfferAreaS2 hclass={'offer-area2 position-relative overflow-hidden space-top top-half arrow-wrap'} />
         <AboutAreaS4 hclass={'about-area4 overflow-hidden space'} />
         <BookingAreaS2 hclass={'booking-area2 bg-fixed space background-image'} />
         <RoomsAreaS2 hclass={'position-relative overflow-hidden space'} />
         <TestimonialAreaS2 hclass={'testi-area2 overflow-hidden bg-top-center space background-image arrow-wrap'} />
         <GalleryAreaS2 hclass={'overflow-hidden space-bottom background-image'} />
         <BrandAreaS2 hclass={'brand-area2 bg-black2 space-extra2'} />
         <BlogAreaS2 hclass={'overflow-hidden space'} />
         <FooterAreaS2 hclass={'footer-wrapper footer-layout1 footer-layout2'} />
         <Scrollbar />
      </Fragment>
   )
}

export default HomePageS2
