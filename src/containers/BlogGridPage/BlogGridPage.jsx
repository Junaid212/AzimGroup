
import { Fragment } from 'react';
import BlogGrid from '../../components/BlogGrid/BlogGrid';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';


const BlogGridPage = () => {
   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={'BLOG GRID'} pagesub={'BLOG GRID'} />
         <BlogGrid hclass={'overflow-hidden space'} />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default BlogGridPage

















