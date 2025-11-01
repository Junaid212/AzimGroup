import { Fragment } from 'react';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import HotelOffersAreaS2 from '../../components/HotelOffersAreaS2/HotelOffersAreaS2';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import Services1 from '../Sevices1/Services1';
import Services3 from '../Services3/Services3';
import ab1 from '../../img/new/129.png';


const RealEstate = () => {

   return (
      <Fragment>
         <section>
         <div className="container">
            <div className="row gy-4">
               <div className="col-12">
                  <div className="room-card style2 style-flex">
                     <div className="box-img global-img">
                        <img src={ab1} alt="Residential Sector" />
                     </div>
                     <div className="box-content">
                        <h3 className="box-title">
                           Real Estate Sector
                        </h3>
                        <p className="sub-title">Azim Facilities Management Services delivers tailored solutions for the dynamic real estate sector, focusing on property value, tenant satisfaction, and operational excellence to ensure assets reach their full potential.</p>
                        <div className="box-price">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
         <Services3/>

      </Fragment>
   )
}

export default RealEstate
