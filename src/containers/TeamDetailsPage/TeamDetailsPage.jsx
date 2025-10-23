import { Fragment } from 'react';
import CountUp from 'react-countup';
import { useParams } from 'react-router-dom';
import teamData from '../../api/team';
import ColorScheme from '../../components/ColorScheme/ColorScheme';
import FooterArea from '../../components/FooterArea/FooterArea';
import HeaderArea from '../../components/HeaderArea/HeaderArea';
import PageTitle from '../../components/PageTitle/PageTitle';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ContactForm from './ContactForm';


const TeamDetailsPage = () => {
   const { slug } = useParams()
   const TeamDetails = teamData.find(item => item.slug === slug)
   return (
      <Fragment>
         <ColorScheme />
         <HeaderArea hclass={'th-header header-layout1'} ContactBtn={true} />
         <PageTitle pageTitle={TeamDetails.title} pagesub={'team Member Details'} />
         <section className="space">
            <div className="container">
               <div className="row gy-40">
                  <div className="col-xl-3 col-md-5 position-relative">
                     <div className="th-team team-author">
                        <div className="box-img">
                           <img src={TeamDetails.image} alt="Team" />
                        </div>
                        <div className="box-content">
                           <h3 className="box-title"><a href="#">{TeamDetails.title}</a></h3>
                           <span className="box-desig">{TeamDetails.subtitle}</span>
                        </div>
                        <div className="team-info-list">
                           <div className="info-box">
                              <h3 className="box-title">Phone Number:</h3>
                              <p className="box-text">
                                 <a href="tel:+00-1234567889" className="box-link">+00-123 456 7889</a>
                              </p>
                           </div>
                           <div className="info-box">
                              <h3 className="box-title">Location:</h3>
                              <p className="box-text">California</p>
                           </div>
                           <div className="info-box">
                              <h3 className="box-title">Email Address:</h3>
                              <p className="box-text">
                                 <a href="mailto:williamjenymail@gmail.com" className="box-link">williamjenymail@gmail.com</a>
                              </p>
                           </div>
                           <div className="info-box">
                              <h3 className="box-title">Services:</h3>
                              <p className="box-text">Business, Consulting, Finance</p>
                           </div>
                           <div className="info-box">
                              <h3 className="box-title">Get In Touch:</h3>
                              <div className="th-social mt-10">
                                 <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                 <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                 <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                                 <a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-md-7">
                     <div className="about-card">
                        <h2 className="mb-20 pb-1 sec-title">About Me</h2>
                        <p>Jenny Willam is one of the best online resources for learning about technology in the medical
                           sphere. There’s a real sense skepticiesm cillum dolore eu fugiat nulla pariatur. Excepteur sint
                           occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit aniem id If you run
                           an internet search for medical blogs, you’ll come across hundreds of results. And figuring out
                           which sources are reputable can take a lot of time. To help ease the process, we compiled. we
                           present present exciting new ventures. <br /> <br />
                           The New York coworking community has also been evolving rapidly Regus and Rockefeller Group
                           Business Center. WeWork and other services have a large presence. The demand coworking Brooklyn
                           neighborhoods is high due to the increased number of millennials in workforce; nearly one in 10
                           workers in the Gowanus, Brooklyn area are remote workers. The industrial area of Gowanus is
                           seeing a surge in new startups that are redesigning old buildings into new coworking spaces.</p>
                        <h4 className="mt-30 mb-20 fs-28">My Services</h4>
                        <p className="mb-4">Venenatis purus egestas lorem aenean enim bibendum. Ac pharetra egestas eget gravida
                           turpis senectus. Sed blandit ipsum orci odio egestas egestas sed bibendum. Rhoncus est proin
                           euismod condimentum eget a tristique integer viverra. facilisis gravida neque convallis a cras.
                           Risus nec Fermentum posuere urna nec. Felis imperdiet proin fermentum leo vel orci porta. Sapien
                           pellentesque habitant morbi tristique.</p>

                        <div className="checklist">
                           <ul>
                              <li>Covers all the international news via websites, blogs, newswires, newspapers, trade
                                 publication</li>
                              <li>This Database provides books, conference proceedings and journals covering all
                                 disciplines in academics</li>
                              <li>Fintech is growing rapidly but Internet Access, Government compliance and Data Security
                                 is where it is still</li>
                              <li>Database provides returns for exchange rates, fixed income tax, price earnings, prices,
                                 equity data</li>
                           </ul>
                        </div>
                        <div className="team-counter-wrap">
                           <div className="team-counter">
                              <h5 className="box-title"><span className="counter-number"><CountUp end={2}></CountUp></span>k+</h5>
                              <p className="box-text">Total Recipe</p>
                           </div>
                           <div className="team-counter">
                              <h5 className="box-title"><span className="counter-number"><CountUp end={65}></CountUp></span>+</h5>
                              <p className="box-text">Total Services</p>
                           </div>
                           <div className="team-counter">
                              <h5 className="box-title"><span className="counter-number"><CountUp end={79}></CountUp></span>+</h5>
                              <p className="box-text">Award Won</p>
                           </div>
                           <div className="team-counter">
                              <h5 className="box-title"><span className="counter-number"><CountUp end={290}></CountUp></span>+</h5>
                              <p className="box-text">Total Events</p>
                           </div>
                        </div>
                        <div className="mt-60">
                           <ContactForm />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <FooterArea hclass={'footer-wrapper footer-layout1'} />
         <Scrollbar />

      </Fragment>
   )
}

export default TeamDetailsPage
