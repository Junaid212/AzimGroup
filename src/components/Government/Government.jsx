import { Fragment } from 'react';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import HotelOffersAreaS2 from '../../components/HotelOffersAreaS2/HotelOffersAreaS2';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ab1 from '../../img/new/128.png';
import Services2 from '../Services2/Services2';


const Government = () => {

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
                           Goverment Sector
                        </h3>
                        <p className="sub-title">Azim Facilities Management Services provides specialized Facility Management solutions for the government sector, ensuring efficient operations, cost-effectiveness, and sustainable facility performance.</p>
                        <div className="box-price">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
         <Services2/>

      </Fragment>
   )
}

export default Government
