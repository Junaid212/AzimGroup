import { Fragment } from 'react';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import ErrorArea from '../../components/ErrorArea/ErrorArea';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
const ErrorPage = () => {

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'404 - Error Page'} pagesub={'404'} />
         <ErrorArea />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default ErrorPage
