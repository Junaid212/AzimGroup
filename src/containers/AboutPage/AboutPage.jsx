import { Fragment } from 'react';
import AboutAreaS4 from '../../components/AboutAreaS4/AboutAreaS4';
import AboutAreaS8 from '../../components/AboutAreaS8/AboutAreaS8';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import CounterAreaS2 from '../../components/CounterAreaS2/CounterAreaS2';
import CtaArea from '../../components/CtaArea/CtaArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import GalleryAreaS5 from '../../components/GalleryAreaS5/GalleryAreaS5';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import LocationAreaS2 from '../../components/LocationAreaS2/LocationAreaS2';
import PageTitle from '../../components/PageTitle/PageTitle';
import RoomsAreaS8 from '../../components/RoomsAreaS8/RoomsAreaS8';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS3 from '../../components/ServiceAreaS3/ServiceAreaS3';
import TeamArea from '../../components/TeamArea/TeamArea';
import TestimonialAreaS5 from '../../components/TestimonialAreaS5/TestimonialAreaS5';


const AboutPage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'About Us'} pagesub={'About Us'} />
         <AboutAreaS8 />
         <ServiceAreaS3 />
         {/* <RoomsAreaS8 /> */}
         {/* <CtaArea hclass={' space-bottom'} /> */}
         <CounterAreaS2 hclass={'space'} />
         <AboutAreaS4 hclass={'bg-black2 overflow-hidden space'} />
         {/* <LocationAreaS2 hclass={'overflow-hidden space'} /> */}
         {/* <TeamArea hclass={'space overflow-hidden'} subClass={'team-content '}/> */}
         {/* <TestimonialAreaS5 hclass={'overflow-hidden testi-area4 space bg-black2'} /> */}
         <GalleryAreaS5 hclass={'space-top'} />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default AboutPage
