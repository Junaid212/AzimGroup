import { ReactLenis } from 'lenis/react'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Preloader from '../components/Preloader/Preloader'
import AboutPage from './AboutPage/AboutPage'
import BlogDetailSidebarPage from './BlogDetailSidebarPage/BlogDetailSidebarPage'
import BlogDetailsPage from './BlogDetailsPage/BlogDetailsPage'
import BlogGridPage from './BlogGridPage/BlogGridPage'
import BlogPage from './BlogPage/BlogPage'
import ContactPage from './ContactPage/ContactPage'
import EquipmentPage from './EquipmentPage/EquipmentPage'
import ErrorPage from './ErrorPage/ErrorPage'
import EventDetailsPage from './EventDetailsPage/EventDetailsPage'
import EventPage from './EventPage/EventPage'
import FaqPage from './FaqPage/FaqPage'
import GalleryPage from './GalleryPage/GalleryPage'
import HomePage from './HomePage/HomePage'
import HomePageS2 from './HomePageS2/HomePageS2'
import HomePageS3 from './HomePageS3/HomePageS3'
import HomePageS4 from './HomePageS4/HomePageS4'
import HomePageS5 from './HomePageS5/HomePageS5'
import PackagePage from './PackagePage/PackagePage'
import PricingPage from './PricingPage/PricingPage'
import ReviewPage from './ReviewPage/ReviewPage'
import RoomDetailsPage from './RoomDetailsPage/RoomDetailsPage'
import RoomPage from './Sectors/Sectors'
import ServiceDetailsPage from './ServiceDetailsPage/ServiceDetailsPage'
import ServicePage from './ServicePage/ServicePage'
import TeamDetailsPage from './TeamDetailsPage/TeamDetailsPage'
import TeamPage from './TeamPage/TeamPage'
import TestimonialPage from './TestimonialPage/TestimonialPage'
import AzimFacilitiesManagementandservices from './AzimFacilitiesManagementandservices/AzimFacilitiesManagementandservices'
import OneWayLimousineWLL from './OneWayLimousineWLL/OneWayLimousineWLL'
import VenYouEvents from './VenYouEvents/VenYouEvents'
import NajilaFoodTrading from './NajilaFoodTrading/NajilaFoodTrading'
import CleaningAndHospitalityServices from './CleaningAndHospitalityServices/CleaningAndHospitalityServices'
import GoldenAutoElectrical from './GoldenAutoElectrical/GoldenAutoElectrical'
import VadakaraToKasargodRestaurant from './VadakaraToKasargodRestaurant/VadakaraToKasargodRestaurant'
import Residential from '../components/Residential/Residential'
import Government from '../components/Government/Government'
import RealEstate from '../components/RealEstate/RealEstate'
import Education from '../components/Education/Education'
import Sectors from './Sectors/Sectors'


const App = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [showFadeAnimation, setShowFadeAnimation] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
         setShowFadeAnimation(true);
      }, 2000);

      return () => clearTimeout(timer);
   }, []);
   return (
      <>
         {isLoading && <Preloader />}
         <ReactLenis root>
            <BrowserRouter>
               <Routes>
                  <Route element={<HomePage />} path="/" />
                  <Route element={<HomePage />} path="home" />
                  <Route element={<HomePageS2 />} path="home-2" />
                  <Route element={<HomePageS3 />} path="home-3" />
                  <Route element={<HomePageS4 />} path="home-4" />
                  <Route element={<HomePageS5 />} path="home-5" />
                  <Route element={<AboutPage />} path="about" />
                  <Route element={<Sectors />} path="sectors" />
                  <Route element={<RoomDetailsPage />} path='room-details/:slug' />
                  <Route element={<TeamPage />} path="team" />
                  <Route element={<TeamDetailsPage />} path='team-details/:slug' />
                  <Route element={<PackagePage />} path="package" />
                  <Route element={<EventPage />} path="event" />
                  <Route element={<EventDetailsPage />} path='event-details/:slug' />
                  <Route element={<EquipmentPage />} path="equipment" />
                  <Route element={<ReviewPage />} path="review" />
                  <Route element={<PricingPage />} path="pricing" />
                  <Route element={<TestimonialPage />} path="testimonial" />
                  <Route element={<FaqPage />} path="faq" />
                  <Route element={<ServicePage />} path="service" />
                  <Route element={<ServiceDetailsPage />} path='service-details/:slug' />
                  <Route element={<AzimFacilitiesManagementandservices/>} path='facilities-management-services/:slug' />
                  <Route element={<OneWayLimousineWLL/>} path='one-way-limousin-wll/:slug' />
                  <Route element={<VenYouEvents/>} path='venyou-events/:slug' />
                  <Route element={<NajilaFoodTrading/>} path='nijila-food-trading/:slug' />
                  <Route element={<CleaningAndHospitalityServices/>} path='hospitality-services/:slug' />
                  <Route element={<GoldenAutoElectrical/>} path='golden-auto-electrical/:slug' />
                  <Route element={<VadakaraToKasargodRestaurant/>} path='restaurent/:slug' />
                  <Route element={<Residential/>} path='residential'/>
                  <Route element={<Government/>} path='government'/>
                  <Route element={<RealEstate/>} path='real-estate'/>
                  <Route element={<Education/>} path='education'/>
                  <Route element={<GalleryPage />} path="gallery" />
                  <Route element={<BlogPage />} path="blog" />
                  <Route element={<BlogGridPage />} path="blog-grid" />
                  <Route element={<BlogDetailsPage />} path='blog-details/:slug' />
                  <Route element={<BlogDetailSidebarPage />} path='blog-details-right-sidebar/:slug' />
                  <Route element={<ContactPage />} path='contact' />
                  <Route element={<ErrorPage />} path="error" />
               </Routes>
            </BrowserRouter>
         </ReactLenis>
      </>
   )
}

export default App