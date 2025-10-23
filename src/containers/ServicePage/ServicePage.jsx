import { Fragment } from 'react';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS5 from '../../components/ServiceAreaS5/ServiceAreaS5';
import FeatureAreaS2 from '../../components/FeatureAreaS2/FeatureAreaS2';
import ServiceAreaS2 from '../../components/ServiceAreaS2/ServiceAreaS2';
const ServicePage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'Our Services'} pagesub={'SERVICES'} />
         < ServiceAreaS5 />
         <ServiceAreaS2 hclass={'overflow-hidden space-bottom overflow-hidden'} />
         {/* <FeatureAreaS2 hclass={'space overflow-hidden'} /> */}
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default ServicePage
