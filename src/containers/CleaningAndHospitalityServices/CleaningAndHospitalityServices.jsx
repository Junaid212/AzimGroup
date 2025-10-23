import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ServiceData from '../../api/service';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import Experience from '../../components/Experience/Experience';
import FooterArea from '../../components/FooterArea/FooterArea';
import GalleryAreaS6 from '../../components/GalleryAreaS6/GalleryAreaS6';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ServiceAreaS6 from '../../components/ServiceAreaS6/ServiceAreaS6';
import SidebarArea from '../../components/SidebarArea/SidebarArea';
import Simg1 from '../../img/service/service_inner_1.jpg';
import Simg2 from '../../img/service/service_inner_2.jpg';
import AboutAreaS3 from '../../components/AboutAreaS3/AboutAreaS3';
import AboutAreaS2 from '../../components/AboutAreaS2/AboutAreaS2';
import RoomsAreaS2 from '../../components/RoomsAreaS2/RoomsAreaS2';



const CleaningAndHospitalityServices = () => {
   const { slug } = useParams()
   const ServiceDetails = ServiceData.find(item => item.slug === slug)

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={ServiceDetails.title} pagesub={'Cleaning and Hospitality Services'} />
         <AboutAreaS2 hclass={'about-area2 overflow-hidden shape-mockup-wrap'} />
         <RoomsAreaS2 hclass={'position-relative overflow-hidden space'} />
         <ServiceAreaS6 />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default CleaningAndHospitalityServices
