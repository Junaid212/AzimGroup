import { Fragment } from 'react';
import BrandAreaS3 from '../../components/BrandAreaS3/BrandAreaS3';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import ContactArea from '../../components/ContactArea/ContactArea';
import ContactInfoArea from '../../components/ContactInfoArea/ContactInfoArea';
import ContactMap from '../../components/ContactMap/ContactMap';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
const ContactPage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'Contact Us'} pagesub={'Contact Us'} />
         <ContactInfoArea />
         <ContactMap />
         <ContactArea />
         <BrandAreaS3 hclass={'space-bottom overflow-hidden'} sclass={'brand-area4 bg-black2'} />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default ContactPage
