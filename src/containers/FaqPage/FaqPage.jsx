import { Fragment } from 'react';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FaqAreaS2 from '../../components/FaqAreaS2/FaqAreaS2';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import MarqueeArea from '../../components/MarqueeArea/MarqueeArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
const FaqPage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'Frequently Asked Questions'} pagesub={'FAQ'} />
         <MarqueeArea hclass={'marquee-area space-top overflow-hidden'} />
         <FaqAreaS2 hclass={'space-bottom bg-top-center background-image'} />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default FaqPage
