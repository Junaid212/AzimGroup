
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import BlogData from '../../api/blog';
import BlogDetail from '../../components/BlogDetails/BlogDetails';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';

const BlogDetailsPage = () => {
   const { slug } = useParams()
   const BlogDetails = BlogData.find(item => item.slug === slug)

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={BlogDetails.title} pagesub={'BLOG Details'} />
         <BlogDetail rclass={'col-12'} BlogSid={false} />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default BlogDetailsPage;