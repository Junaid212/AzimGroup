/* image */
import Simg1 from '../img/new/35.png'
import Simg2 from '../img/new/36.png'
import Simg3 from '../img/new/37.png'
import Simg4 from '../img/service/service_card_4.jpg'
import Simg5 from '../img/service/service_card_5.jpg'
import Simg6 from '../img/service/service_card_6.jpg'
import Simg7 from '../img/service/service_card_5_1.jpg'
import Simg8 from '../img/service/service_card_5_2.jpg'
import Simg9 from '../img/service/service_card_5_3.jpg'
import Simg10 from '../img/service/service_card_5_4.jpg'

import grid1 from '../img/new/28.png'
import grid2 from '../img/new/29.png'
import grid3 from '../img/new/30.png'
import grid4 from '../img/new/31.png'
import grid5 from '../img/new/32.png'
import grid6 from '../img/new/33.png'
import grid7 from '../img/new/34.png'
import grid8 from '../img/service/service_grid_8.jpg'



import Icon1 from '../img/new/121.png'
import Icon2 from '../img/new/122.png'
import Icon3 from '../img/new/123.png'
import Icon4 from '../img/new/124.png'
import Icon5 from '../img/new/125.png'
import Icon6 from '../img/new/126.png'
import Icon7 from '../img/icon/service_2_1.svg'
import Icon8 from '../img/icon/service_2_2.svg'
import Icon9 from '../img/icon/service_2_3.svg'
import Icon10 from '../img/icon/service_2_4.svg'
import Icon11 from '../img/icon/service_2_5.svg'
import Icon12 from '../img/icon/service_2_6.svg'
import Icon13 from '../img/icon/service_2_7.svg'
import Icon14 from '../img/icon/service_2_8.svg'
import service_1 from '../img/new/101.png'
import service_2 from '../img/new/102.png'
import service_3 from '../img/new/103.png'
import service_4 from '../img/new/104.png'
import service_5 from '../img/new/105.png'
import service_6 from '../img/new/106.png'
import service_7 from '../img/new/106.png'
import { PiCarThin } from "react-icons/pi";



const ServiceData = [
   {
      id: '01',
      num: '01',
      title: 'AZIM Facilities Management & services',
      title2: 'Integrated Expertise',
      subtitle: 'Crafting Elevated Experiences: Where Excellence Meets Service. Your space, our commitment.',
      subtitle2:'Azim Group delivers a unique advantage through its comprehensive suite of services offered by diverse subsidiaries. We provide fully integrated solutions across multiple sectors, ensuring seamless coordination and exceptional results.',
      slug: '1',
      image: service_1,
      grid: grid1,
      Icon: Icon1,
      Icon2: service_1,
      link: '/one-way-limousin-wll/1'
   },
   {
      id: '02',
      num: '02',
      title: 'One Way Limousine WLL',
      title2: 'Proven Track Record',
      subtitle: 'The wellbeing of our guests and staff is of paramount importance. Our Covid-19 strategy includes deep cleaning rooms between guests.',
      subtitle2:'Our long history of successful ventures speaks for itself. Each subsidiary within Azim Group consistently demonstrates excellence, reliability, and leadership in its respective industry.',
      slug: '2',
      image: service_2,
      grid: grid2,
      Icon: Icon2,
      Icon2: service_2,
      link: '/facilities-management-services/2'
   },
   {
      id: '03',
      num: '03',
      title: 'VenYou Events',
      title2: 'Versatility Across Industries',
      subtitle: 'The wellbeing of our guests and staff is of paramount importance. Our Covid-19 strategy includes deep cleaning rooms between guests.',
      subtitle2:'From facility management, limousine services, and event management to food trading, auto electrical services, restaurants, and cleaning and hospitality solutions — Azim Group’s expertise spans a broad range of industries.',
      slug: '3',
      image: service_3,
      grid: grid3,
      Icon: Icon3,
      Icon2: service_3,
      link: '/venyou-events/3'
   },
   {
      id: '04',
      num: '04',
      title: 'Najila Food Trading',
      title2: 'Innovation at the Core',
      subtitle: 'The wellbeing of our guests and staff is of paramount importance. Our Covid-19 strategy includes deep cleaning rooms between guests.',
      subtitle2:'We embrace innovation at every level, adopting modern technologies and progressive approaches to remain at the forefront of industry trends and standards.',
      slug: '4',
      image: service_4,
      grid: grid4,
      Icon: Icon4,
      Icon2: service_4,
      link: '/nijila-food-trading/4'
   },
   {
      id: '05',
      num: '05',
      title: 'Golden Vision Cleaning and Hospitality Services',
      title2: 'Customer-Centric Focus',
      subtitle: 'The wellbeing of our guests and staff is of paramount importance. Our Covid-19 strategy includes deep cleaning rooms between guests.',
      subtitle2:'At Azim Group, customer satisfaction is a priority. We customize our services to meet the unique needs of each client, building trusted relationships that last.',
      slug: '5',
      image: service_5,
      grid: grid5,
      Icon: Icon5,
      Icon2: service_5,
      link: '/hospitality-services/5'
   },
   {
      id: '06',
      num: '06',
      title: 'Vadakara To Kasargod Restaurant',
      title2: 'Comprehensive Solutions',
      subtitle: 'Whats life without good food. Both our restaurants offer a variety of cuisine to try. Cooked with fresh vegetables and herbs that you can pick from the farm.',
      subtitle2:'As a one-stop solution provider, Azim Group enables clients to access an extensive range of services, meeting diverse business requirements under one roof.',
      slug: '6',
      image: service_7,
      grid: grid7,
      Icon: Icon6,
      link: '/restaurent/7'
   },
   {
      id: '07',
      num: '07',
      title: 'Golden Auto Electrical',
      title2: 'Televesion',
      subtitle: 'The wellbeing of our guests and staff is of paramount importance. Our Covid-19 strategy includes deep cleaning rooms between guests.',
      slug: '7',
      image: service_6,
      grid: grid6,
      Icon: Icon10,
      Icon2: service_6,
      link: '/golden-auto-electrical/6'
   },
   {
      id: '08',
      num: '08',
      title: 'Dynamic Growth',
      title2: 'Boundless Progress',
      subtitle: "Azim Group's trajectory is marked by dynamic growth, evolving and expanding its presence across industries, showcasing resilience and adaptability.",
      slug: '8',
      image: Simg1,
      grid: grid8,
      Icon: Icon6,
   },
   {
      id: '09',
      num: '09',
      title: 'Adaptable Approach',
      title2: 'Boundless Progress',
      subtitle: "Azim Group's success lies in its adaptive approach, navigating challenges with resilience. Its ability to evolve has positioned the group as a dynamic force, ready for the future.",
      slug: '9',
      image: Simg2,
      Icon: Icon6,
   },
   {
      id: '10',
      num: '10',
      title: 'Innovative Solutions',
      title2: 'Boundless Progress',
      subtitle: "Azim Group is renowned for pioneering innovative solutions, constantly pushing boundaries to offer products and services that set industry benchmarks.",
      slug: '10',
      image: Simg3,
      Icon: Icon6,
   },
   {
      id: '11',
      num: '11',
      title: 'Room Services',
      title2: 'SPECIAL EVENTS',
      subtitle: 'A hotel service that allows guests to order food, drinks, and other items to their room.',
      slug: '11',
      image: Simg10,
      Icon: Icon7,
   },
    {
      id: '12',
      num: '12',
      title: 'Swimming Pool',
      title2: 'SPECIAL EVENTS',
      subtitle: 'A hotel service that allows guests to order food, drinks, and other items to their room.',
      slug: '12',
      image: Simg10,
      Icon: Icon8,
   },
    {
      id: '13',
      num: '13',
      title: 'Fitness & Wellness',
      title2: 'SPECIAL EVENTS',
      subtitle: 'A hotel service that allows guests to order food, drinks, and other items to their room.',
      slug: '13',
      image: Simg10,
      Icon: Icon9,
   },
    {
      id: '14',
      num: '14',
      title: 'Car Parking',
      title2: 'SPECIAL EVENTS',
      subtitle: 'A hotel service that allows guests to order food, drinks, and other items to their room.',
      slug: '14',
      image: Simg10,
      Icon: Icon10,
      
   },
    {
      id: '15',
      num: '15',
      title: 'Pick up & Drop',
      title2: 'SPECIAL EVENTS',
      subtitle: 'A hotel service that allows guests to order food, drinks, and other items to their room.',
      slug: '15',
      image: Simg10,
      Icon: Icon11,
   },
    {
      id: '16',
      num: '16',
      title: 'Store Luggage',
      title2: 'SPECIAL EVENTS',
      subtitle: 'A hotel service that allows guests to order food, drinks, and other items to their room.',
      slug: '16',
      image: Simg10,
      Icon: Icon12,
   },
    {
      id: '17',
      num: '17',
      title: 'Restaurant & Bar',
      title2: 'SPECIAL EVENTS',
      subtitle: 'A hotel service that allows guests to order food, drinks, and other items to their room.',
      slug: '17',
      image: Simg10,
      Icon: Icon13,
   },
    {
      id: '18',
      num: '18',
      title: 'Free WiFi',
      title2: 'SPECIAL EVENTS',
      subtitle: 'A hotel service that allows guests to order food, drinks, and other items to their room.',
      slug: '18',
      image: Simg10,
      Icon: Icon14,
   },
]
export default ServiceData;