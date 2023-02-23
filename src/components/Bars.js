import React from 'react';
import 'wowjs/css/libs/animate.css';
import '../Bars.css';

const Bars = () => {
  return (
    <div className="mt-28">
      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="col-sm-6 col-lg-4 wow fadeInRight mb-3 bar" data-wow-delay="0s">
            <article className="box-icon-ruby shadow-md">
              <div className="unit box-icon-ruby-body flex-col md:flex-row text-left md:text-left lg:flex-col lg:items-center lg:text-center xl:flex-row xl:text-left">
                <div className="unit-left">
                  <div className="box-icon-ruby-icon linearicons-leaf">
                    <box-icon name='leaf' size='md' color="#fe8d34"></box-icon>
                  </div>
                </div>
                <div className="unit-body">
                  <h4 className="box-icon-ruby-title text-lg " style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                    <a href="/" className="text-none" style={{textDecoration: 'none'}}>
                      Natural &amp; Organic
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4 wow fadeInRight mb-3 bar" data-wow-delay=".1s">
            <article className="box-icon-ruby shadow-md">
              <div className="unit box-icon-ruby-body flex-col md:flex-row text-left md:text-left lg:flex-col lg:items-center lg:text-center xl:flex-row xl:text-left">
                <div className="unit-left">
                  <div className="box-icon-ruby-icon linearicons-shovel">
                    <box-icon name='leaf' size='md' color="#fe8d34"></box-icon>
                  </div>
                </div>
                <div className="unit-body">
                  <h4 className="box-icon-ruby-title text-lg " style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                    <a href="/" className="text-none" style={{textDecoration: 'none'}}>
                      Fresh Vegetables
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
          <div className="col-sm-6 col-lg-4 wow fadeInRight mb-3 bar" data-wow-delay=".2s">
            <article className="box-icon-ruby shadow-md">
              <div className="unit box-icon-ruby-body flex-col md:flex-row text-left md:text-left lg:flex-col lg:items-center lg:text-center xl:flex-row xl:text-left">
                <div className="unit-left">
                  <div className="box-icon-ruby-icon linearicons-sun">
                    <box-icon name='sun' size='md' color="#fe8d34"></box-icon>
                  </div>
                </div>
                <div className="unit-body">
                  <h4 className="box-icon-ruby-title text-lg " style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                    <a href="/" className="text-none" style={{textDecoration: 'none'}}>
                      Dedicated Team
                    </a>
                  </h4>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bars;
