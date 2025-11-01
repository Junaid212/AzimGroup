import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
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
import OfferAreaS5 from '../../components/OfferAreaS5/OfferAreaS5';
import RoomsAreaS5 from '../../components/RoomsAreaS5/RoomsAreaS5';
import RoomData from '../../api/room';
import offer_1 from '../../img/new/118.png';
import tag from '../../img/shape/tag.png';
import offer_2 from '../../img/new/51.png';
import offer_3 from '../../img/new/52.png';
import offer_4 from '../../img/new/53.png';
import offer_5 from '../../img/new/54.png';
import BlogAreaS5 from '../../components/BlogAreaS5/BlogAreaS5';
import BlogArea from '../../components/BlogArea/BlogArea';
import titleimg from '../../img/theme-img/title_icon.svg';


const NajilaFoodTrading = () => {
   const { slug } = useParams()
   const ServiceDetails = ServiceData.find(item => item.slug === slug)

   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={ServiceDetails.title} pagesub={'Food Trading'} />
        <div className="container" style={{marginTop:'60px'}}>
            <div className="row gy-60 gx-60 align-items-center">
                <div className="col-xxl-4">
                    <div className="title-area">
                        <span className="sub-title2 style1">ABOUT</span>
                        <h2 className="sec-title text-white">Najila Food Trading</h2>
                        <span className="title-img"><img src={titleimg} alt="shape" /></span>
                        <p className="sec-text mt-35">As a leading name in food trading, Najila Food Trading is a 
                            recognized destination for top-quality products. We import and distribute an extensive
                             range of food serving the food service, wholesale, and retail sectors. Our partnerships
                              with international organizations ensure a consistent supply of globally acclaimed products,
                               including dry, frozen, fresh goods, live fish, Japanese delicacies, meats, and essentials.
                                We are your pathway to exceptional culinary experiences.</p>
                    </div>
                    <div className="about-author-wrap style2">
                        {/* <div className="thumb">
                            <img src={avater2} alt="img" />
                        </div> */}
                        <div className="box-content">
                            <h4 className="about-author-title">For more details, check out the link below!</h4>
                            <span className="about-author-desig"><Link to='https://najilafood.com/' target='blank'>Najilafood.com</Link></span>
                        </div>
                        <div className="author-sign">
                            {/* <img src={signature2} alt="img" /> */}
                        </div>
                    </div>
                </div>
                
                <div className="col-xxl-8">
                    <div className="offer-wrap6">
                        <div className="offer-tag-thumb global-img">
                            <div className="thumb">
                                <img className="w-100" src={offer_1} alt="img" />
                            </div>
                        </div>
                        <div className="offer-list-wrap">
                            <div className="offer-list">
                                <div className="box-img global-img">
                                    <img src={offer_2} alt="img" />
                                </div>
                            </div>
                            <div className="offer-list">
                                <div className="box-img global-img">
                                    <img src={offer_3} alt="img" />
                                </div>
                            </div>
                            <div className="offer-list">
                                <div className="box-img global-img">
                                    <img src={offer_4} alt="img" />
                                </div>
                            </div>
                            <div className="offer-list">
                                <div className="box-img global-img">
                                    <img src={offer_5} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <BlogArea hclass={'space bg-shape overflow-hidden'} />
         
        
   
         <ServiceAreaS6 />
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default NajilaFoodTrading
