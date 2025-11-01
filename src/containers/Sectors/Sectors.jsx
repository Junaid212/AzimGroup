import { Fragment } from 'react';
import BookingAreaS7 from '../../components/BookingAreaS7/BookingAreaS7';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import RoomsAreaS6 from '../../components/RoomsAreaS6/RoomsAreaS6';
import Scrollbar from '../../components/Scrollbar/Scrollbar';


const Sectors = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'Sectors'} pagesub={'Sectors'} />
         <RoomsAreaS6 />
         {/* <BookingAreaS7 hclass={'booking-area2 position-relative bg-fixed background-image'} /> */}
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default Sectors
