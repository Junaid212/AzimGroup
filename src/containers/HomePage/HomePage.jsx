import { Fragment } from 'react';
import AboutArea from '../../components/AboutArea/AboutArea';
import AboutAreaS2 from '../../components/AboutAreaS2/AboutAreaS2';
import BlogArea from '../../components/BlogArea/BlogArea';
import BrandArea from '../../components/BrandArea/BrandArea';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FeatureArea from '../../components/FeatureArea/FeatureArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import GalleryArea from '../../components/GalleryArea/GalleryArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import HeroArea from '../../components/HeroArea/HeroArea';
import HotelArea from '../../components/HotelArea/HotelArea';
import HotelOffersArea from '../../components/HotelOffersArea/HotelOffersArea';
import RoomsArea from '../../components/RoomsArea/RoomsArea';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceArea from '../../components/ServiceArea/ServiceArea';
import TestimonialArea from '../../components/TestimonialArea/TestimonialArea';
import CtaArea from '../../components/CtaArea/CtaArea';


const HomePage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'}  />
         <HeroArea />
         <AboutArea hclass={'about-shape overflow-hidden bg-shape'} />
         <RoomsArea hclass={'overflow-hidden bg-shape space-top'} />
         {/* <HotelArea hclass={'bg-shape space-top overflow-hidden'} /> */}
         {/* <FeatureArea hclass={'space-top overflow-hidden bg-shape'} /> */}
         
         {/* <AboutAreaS2 hclass={'about-area2 overflow-hidden shape-mockup-wrap'} /> */}
         <ServiceArea hclass={'overflow-hidden bg-shape space-top'} />
         <BrandArea hclass={'space bg-shape'} />
         {/* <CtaArea hclass={' space-bottom'} /> */}
         {/* <HotelOffersArea hclass={'space-top overflow-hidden bg-shape'} /> */}
         {/* <GalleryArea hclass={'overflow-hidden bg-shape space-top'} /> */}
         {/* <TestimonialArea hclass={'overflow-hidden space-top bg-shape TestimonialOn'} /> */}
         {/* <BlogArea hclass={'space bg-shape overflow-hidden'} /> */}
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default HomePage
