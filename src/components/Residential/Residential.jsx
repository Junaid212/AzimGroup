import { Fragment } from 'react';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import HotelOffersAreaS2 from '../../components/HotelOffersAreaS2/HotelOffersAreaS2';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import Services1 from '../Sevices1/Services1';


const Residential = () => {

   return (
      <Fragment>
         {/* <ColorScheme /> */}
         {/* <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} /> */}
         {/* <PageTitle pageTitle={'Packages'} pagesub={'Packages '} /> */}
         <HotelOffersAreaS2 hclass={'space'} />
         <Services1/>
         {/* <FooterArea hclass={'footer-wrapper footer-layout1'} /> */}
         {/* <Scrollbar /> */}

      </Fragment>
   )
}

export default Residential
