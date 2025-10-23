import { Fragment } from 'react';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import CtaArea from '../../components/CtaArea/CtaArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import RoomsAreaS8 from '../../components/RoomsAreaS8/RoomsAreaS8';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS4 from '../../components/ServiceAreaS4/ServiceAreaS4';


const EquipmentPage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'Equipments'} pagesub={'Equipments'} />
         <ServiceAreaS4 />
         <RoomsAreaS8 />
         <CtaArea hclass={' space-bottom'} />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default EquipmentPage
