import React, { useState } from 'react';
// import AboutArea from './AboutArea';
// import RoomsArea from './RoomsArea';
// import ServiceArea from './ServiceArea';
import ServiceAreaS4 from '../ServiceAreaS4/ServiceAreaS4';
import Residential from '../Residential/Residential';
import RoomsAreaS8 from '../RoomsAreaS8/RoomsAreaS8';
import Government from '../Government/Government';
import RealEstate from '../RealEstate/RealEstate';
import Education from '../Education/Education';

const ComponentFilter = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    // { label: 'All', value: 'all' },
    { label: 'Residential ', value: 'residential' },
    { label: 'Government ', value: 'government' },
    { label: 'Real Estate', value: 'real-estate' },
    { label: 'Education', value: 'education' },
  ];

  const shouldShowComponent = (componentType) => {
    return activeFilter === 'all' || activeFilter === componentType;
  };

  return (
    <div>
      {/* Filter Menu */}
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

      {/* Filtered Components */}
      {shouldShowComponent('residential') && (
        <Residential />
      )}
      
      {shouldShowComponent('government') && (
        <Government/>
      )}
      
      {shouldShowComponent('real-estate') && (
        <RealEstate />
      )}
      
      {shouldShowComponent('education') && (
        <Education/>
      )}
    </div>
  );
};

export default ComponentFilter;