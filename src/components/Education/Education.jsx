import { Fragment } from 'react';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import HotelOffersAreaS2 from '../../components/HotelOffersAreaS2/HotelOffersAreaS2';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import Services1 from '../Sevices1/Services1';
import Services4 from '../Services4/Services4';
import ab1 from '../../img/new/130.png';


const Education = () => {

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
                           Education Sector
                        </h3>
                        <p className="sub-title">Azim Facilities Management Services delivers tailored solutions for the education sector, ensuring safe, efficient, and inspiring learning environments for students and staff.</p>
                        <div className="box-price">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
         <Services4/>

      </Fragment>
   )
}

export default Education
