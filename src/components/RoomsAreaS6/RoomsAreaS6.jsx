import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import left from '../../img/icon/left-arrow.svg';
import right from '../../img/icon/right-arrow.svg';
import RoomData from '../../api/room';
import cat_3 from '../../img/icon/cat_3.svg';
import cat_4 from '../../img/icon/cat_4.svg';

const RoomsAreaS6 = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [activeFilter, setActiveFilter] = useState('*');

  const filters = [
    { label: 'All', value: '*' },
    { label: 'Luxury Room', value: 'cat1' },
    { label: 'Suits Room', value: 'cat2' },
    { label: 'Deluxe Room', value: 'cat3' },
    { label: 'Twine Rooms', value: 'cat4' },
  ];

 const isVisible = (room) => {
  return activeFilter === '*' || (room.categories && room.categories.includes(activeFilter));
};

  return (
    <section className="overflow-hidden space">
      <div className="container">
        <>
          <div className="filter-menu indicator-active justify-content-center mb-60 filter-menu-active">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`tab-btn ${activeFilter === filter.value ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="row gy-4 ">
            {RoomData.filter(isVisible).slice(0, 6).map((room) => (
              <div
                key={room.id}
                className={`col-lg-4 col-md-6 filter-item ${(room.categories || []).join(' ')}`}
              >
               <div className="room-box">
                        <div className="box-img">
                            <img src={room.imgRoom} alt="" />
                        </div>
                        <span className="discount">{room.discount}/night</span>
                        <div className="box-title-area">
                            <div className="box-number">{room.id}</div>
                            <h3 className="box-title"><Link onClick={ClickHandler} to={`/room-details/${room.slug}`}>{room.title}</Link></h3>
                            <div className="mt-10"><Link onClick={ClickHandler} to={`/room-details/${room.slug}`} className="th-btn2 style2">VIEW DETAILS</Link></div>
                        </div>
                        <div className="box-content">
                            <div className="box-wrapp">
                                <div className="box-number">{room.id}</div>
                                <h3 className="box-title"><Link onClick={ClickHandler} to={`/room-details/${room.slug}`}>{room.title}</Link></h3>
                                <div className="box-review">
                                    <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i>
                                </div>
                                <div className="room-card-meta">
                                    <span><img src={room.cat} alt="icon" />King Bed</span>
                                    <span><img src={cat_3} alt="icon" />1500 sqft/Room</span>
                                    <span><img src={cat_4} alt="icon" />2 Person</span>
                                </div>
                                <div className="mt-10"><Link onClick={ClickHandler} to={`/room-details/${room.slug}`} className="th-btn2 style2">VIEW DETAILS</Link></div>
                            </div>
                        </div>
                    </div>

              </div>
            ))}
          </div>
        </>
      </div>

      <div className="th-pagination text-center mt-60 mb-0">
        <ul>
          <li>
            <Link onClick={ClickHandler} to="/blog">
              <img src={left} alt="Previous" />
            </Link>
          </li>
          <li><Link onClick={ClickHandler} to="/blog">1</Link></li>
          <li><Link onClick={ClickHandler} to="/blog">2</Link></li>
          <li><Link onClick={ClickHandler} to="/blog">3</Link></li>
          <li><Link onClick={ClickHandler} to="/blog">4</Link></li>
          <li>
            <Link onClick={ClickHandler} to="/blog">
              <img src={right} alt="Next" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RoomsAreaS6;
