import { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  const handleCancel = (e) => {
    e.preventDefault();
    setLoading(false);
  };

  if (!loading) return null;

  return (
    <div className="preloader">
      <button className="th-btn preloaderCls" onClick={handleCancel}>
        Cancel Preloader
      </button>
      <div id="preloader" className="preloader-inner">
        <img src={logo} alt="img" />
        <div className="txt-loading">
          {['A', 'Z', 'I', 'M','G','R','O','U','P'].map((letter, index) => (
            <span 
              key={index} 
              data-text-preloader={letter} 
              className="letters-loading"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;