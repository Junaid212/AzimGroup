import { Fragment } from 'react';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import EventAreaS2 from '../../components/EventAreaS2/EventAreaS2';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';


const EventPage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'Events'} pagesub={'Events'} />
         <EventAreaS2 />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default EventPage
