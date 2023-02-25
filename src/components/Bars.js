// import React from 'react';
// import 'wowjs/css/libs/animate.css';
import '../Bars.css';
import React from 'react';
import 'wowjs/css/libs/animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSun } from '@fortawesome/free-solid-svg-icons';

const Bars = () => {
  const bars = [
    { icon: faLeaf, title: 'Production' },
    { icon: faLeaf, title: 'Aggregation' },
    { icon: faSun, title: 'Logistics' },
    { icon: faSun, title: 'Cold chain' },
    { icon: faSun, title: 'Consulting' }
  ];

  return (
    <div className="mt-28 container">
      <div className="flex flex-wrap justify-center">
        {bars.map((bar, index) => (
          <div
            key={index}
            className={`col-sm-6 col-lg-4 wow fadeInRight mb-3 bar`}
            data-wow-delay={`${index * 0.1}s`}
          >
            <article className="box-icon-ruby shadow-md">
              <div className="unit box-icon-ruby-body flex-col md:flex-row text-left md:text-left lg:flex-col lg:items-center lg:text-center xl:flex-row xl:text-left">
                <div className="unit-left">
                  <div className="box-icon-ruby-icon">
                    <FontAwesomeIcon icon={bar.icon} size="md" color="#fe8d34" />
                  </div>
                </div>
                <div className="unit-body">
                  <h4 className="box-icon-ruby-title text-lg font-medium">
                    <a href="/" className="text-none" style={{ textDecoration: 'none' }}>
                      {bar.title}
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bars;
