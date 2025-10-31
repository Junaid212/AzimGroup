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
import BrandArea from '../../components/BrandArea/BrandArea';


const AboutPage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'About Us'} pagesub={'About Us'} />
         <AboutAreaS8 />
        <div
  className="blockquote-row"
  style={{
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  }}
>
  <blockquote style={{ flex: '1 1 300px' }}>
    <p>
      We aim to be Qatar’s leading force in collaborative excellence, inspiring innovation and shaping 
      industry benchmarks. Our vision is a future where our group of companies flourishes while creating
       meaningful impact across industries and society.
    </p>
    <cite className="box-title">Our Vision</cite>
  </blockquote>

  <blockquote style={{ flex: '1 1 300px' }}>
    <p>
      Our mission at AZIM Group is to provide outstanding services driven by 
      collaboration, innovation, and unwavering commitment. We strive to surpass
       client expectations, influence industry standards, and actively support Qatar’s development.
    </p>
    <cite className="box-title">Our Mission</cite>
  </blockquote>
</div>


         <ServiceAreaS3 />
         {/* <RoomsAreaS8 /> */}
         
         <CounterAreaS2 hclass={'space'} />
         <AboutAreaS4 hclass={'bg-black2 overflow-hidden space'} />
         <BrandArea hclass={'space bg-shape'} />
         {/* <CtaArea hclass={' space-bottom'} /> */}
         {/* <LocationAreaS2 hclass={'overflow-hidden space'} /> */}
         {/* <TeamArea hclass={'space overflow-hidden'} subClass={'team-content '}/> */}
         {/* <TestimonialAreaS5 hclass={'overflow-hidden testi-area4 space bg-black2'} /> */}
         {/* <GalleryAreaS5 hclass={'space-top'} /> */}
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default AboutPage
