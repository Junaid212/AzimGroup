import React from 'react';

const ScrollLink = ({ href, children, offset = 10 }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="hero-scroll-wrap">
      {children}
    </a>
  );
};

export default ScrollLink;
