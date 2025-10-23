import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../img/bg/breadcumb-bg.jpg'

const PageTitle = (props) => {
 const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
       <div className="breadcumb-banner">
        <div className="breadcumb-wrapper background-image" style={{backgroundImage:`url(${bgImage})`}}>
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title">{props.pageTitle}</h1>
                    <ul className="breadcumb-menu">
                        <li><Link onClick={ClickHandler} to="/">Home</Link></li>
                        <li>{props.pagesub}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   );
};

export default PageTitle;