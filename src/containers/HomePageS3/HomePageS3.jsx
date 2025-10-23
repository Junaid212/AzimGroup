import { Fragment } from 'react';
import AboutAreaS5 from '../../components/AboutAreaS5/AboutAreaS5';
import BlogAreaS3 from '../../components/BlogAreaS3/BlogAreaS3';
import BookingAreaS3 from '../../components/BookingAreaS3/BookingAreaS3';
import BookingAreaS4 from '../../components/BookingAreaS4/BookingAreaS4';
import BrandAreaS3 from '../../components/BrandAreaS3/BrandAreaS3';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import EventArea from '../../components/EventArea/EventArea';
import FooterAreaS3 from '../../components/FooterAreaS3/FooterAreaS3';
import GalleryAreaS3 from '../../components/GalleryAreaS3/GalleryAreaS3';
import HeaderAreaS2 from '../../components/HeaderAreaS2/HeaderAreaS2';
import HeroAreaS3 from '../../components/HeroAreaS3/HeroAreaS3';
import HotelAreaS2 from '../../components/HotelAreaS2/HotelAreaS2';
import MarqueeArea from '../../components/MarqueeArea/MarqueeArea';
import OfferAreaS4 from '../../components/OfferAreaS4/OfferAreaS4';
import PackageArea from '../../components/PackageArea/PackageArea';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import TestimonialAreaS3 from '../../components/TestimonialAreaS3/TestimonialAreaS3';


const HomePageS3 = () => {

   return (
      <Fragment>
         <div className="home-city-hotel" style={{ backgroundColor: "#112E2E" }}>
            <HeaderAreaS2 hclass={'th-header header-layout3'} RoomBtn={true} />
            <HeroAreaS3 />
            <BookingAreaS4 hclass={'booking-area style2'} />
            <ColorScheme />
            <OfferAreaS4 hclass={'offer-area4 position-relative overflow-hidden space-top'} />
            <AboutAreaS5 hclass={'overflow-hidden space '} />
            <PackageArea hclass={'package-area space overflow-hidden background-image'} />
            <HotelAreaS2 hclass={'hotel-area2'} />
            <MarqueeArea hclass={'marquee-area space-top overflow-hidden'} />
            <EventArea hclass={'space-extra2-top space-bottom overflow-hidden'} />
            <TestimonialAreaS3 hclass={'overflow-hidden space bg-light3'} />
            <GalleryAreaS3 hclass={'position-relative overflow-hidden space-top background-image'} />
            <BrandAreaS3 hclass={'space overflow-hidden'} sclass={'brand-area3 space-extra2'} />
            <BookingAreaS3 hclass={'booking-area3 bg-fixed space'} />
            <BlogAreaS3 hclass={'overflow-hidden space'} />
            <FooterAreaS3 hclass={'footer-wrapper footer-layout1 footer-layout3'} />
            <Scrollbar />
         </div>

      </Fragment>
   )
}

export default HomePageS3
