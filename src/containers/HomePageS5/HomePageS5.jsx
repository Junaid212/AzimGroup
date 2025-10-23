import { Fragment } from 'react';
import AboutAreaS7 from '../../components/AboutAreaS7/AboutAreaS7';
import BlogAreaS5 from '../../components/BlogAreaS5/BlogAreaS5';
import BrandAreaS3 from '../../components/BrandAreaS3/BrandAreaS3';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import CtaArea from '../../components/CtaArea/CtaArea';
import EventArea from '../../components/EventArea/EventArea';
import FooterAreaS5 from '../../components/FooterAreaS5/FooterAreaS5';
import GalleryAreaS5 from '../../components/GalleryAreaS5/GalleryAreaS5';
import HeaderAreaS3 from '../../components/HeaderAreaS3/HeaderAreaS3';
import HeroAreaS5 from '../../components/HeroAreaS5/HeroAreaS5';
import LocationArea from '../../components/LocationArea/LocationArea';
import MarqueeArea from '../../components/MarqueeArea/MarqueeArea';
import OfferAreaS5 from '../../components/OfferAreaS5/OfferAreaS5';
import PricingArea from '../../components/PricingArea/PricingArea';
import RoomsAreaS5 from '../../components/RoomsAreaS5/RoomsAreaS5';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import TestimonialAreaS3 from '../../components/TestimonialAreaS3/TestimonialAreaS3';


const HomePageS4 = () => {

   return (
      <Fragment>
         <div className="home-city-hotel" style={{ backgroundColor: "#0C2830" }}>
            <ColorScheme />
            <HeaderAreaS3 hclass={'th-header header-layout5'} RoomBtn={true} Logoshapetwo={true} />
            <HeroAreaS5 />
            <AboutAreaS7 hclass={'overflow-hidden space bg-top-right background-image'} />
            <OfferAreaS5 hclass={'position-relative overflow-hidden bg-light2 space overflow-hidden'} />
            <RoomsAreaS5 hclass={'overflow-hidden space overflow-hidden'} />
            <CtaArea hclass={'space-bottom'} />
            <LocationArea hclass={'overflow-hidden space background-image'} />
            <MarqueeArea hclass={'marquee-area space-top overflow-hidden'} />
            <EventArea hclass={'space-extra2-top space-bottom overflow-hidden'} />
            <TestimonialAreaS3 hclass={'overflow-hidden bg-light2 space'} />
            <PricingArea hclass={'space'} />
            <BrandAreaS3 hclass={'space overflow-hidden'} sclass={'brand-area3 bg-light2 space-extra2'} />
            <BlogAreaS5 hclass={'verflow-hidden space-top'} />
            <GalleryAreaS5 hclass={'space-top'} />
            <FooterAreaS5 hclass={'footer-wrapper footer-layout1 footer-layout2 footer-layout2-1 bg-fixed'} />
            <Scrollbar />
         </div>




      </Fragment>
   )
}

export default HomePageS4
