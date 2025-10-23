import { Fragment } from 'react';
import BookingAreaS7 from '../../components/BookingAreaS7/BookingAreaS7';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FaqArea from '../../components/FaqArea/FaqArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import PricingAreaS2 from '../../components/PricingAreaS2/PricingAreaS2';
import Scrollbar from '../../components/Scrollbar/Scrollbar';

const PricingPage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'Pricing Plan'} pagesub={'Pricing Plan'} />
         <PricingAreaS2 hclass={'space'} />
         <FaqArea hclass={'space-bottom bg-top-center background-image'} />
         <BookingAreaS7 hclass={'booking-area2 position-relative bg-fixed background-image'} />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default PricingPage
