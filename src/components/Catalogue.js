import React, { useState, useEffect } from 'react';
// import { formatCurrency } from '../utilities/formatCurrency';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { catalogues } from '../components/items';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Catalogue = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 2
    }
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = catalogues.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <section className='m-4' id='catalogue'>
      <div className='text-center mt-10'>
        <h2
          className='text-[#fe8d34] font-md text-4xl md:mt-[10%] mt-[15%]'
          style={{ fontFamily: 'Josefin Sans, sans-serif' }}
        >
          Catalogue
        </h2>
        <img src="./images/vine.png" alt="a vine" className='mx-auto block mb-4' />
        <p
          className='font-semibold text-xl mb-7 block mx-auto'
          style={{ fontFamily: 'Josefin Sans, sans-serif' }}
        >
          Look through our catalogue for our specialty
        </p>
      </div>
      <input className='w-full md:w-1/2 md:ml-[49%] lg:ml-[66%] lg:w-1/3 py-2 px-4 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-4'
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
        style={{}}
      />
      <Carousel responsive={responsive} className='z-[1]'>
        {searchResults.map((catalogue) => (
          <Card
            className='md:ml-4 ml-2'
            style={{ borderRadius: '4px' }}
            key={catalogue.id}
          >
            <div className='text-center shadow-md'>
              <img
                alt='Awesome Fresh Gallery'
                className='object-cover object-center h-[200px] w-[350px] rounded-lg'
                src={catalogue.imageUrl}
              />
              <div className=' py-3'>
                <h2 className='text-lg font-bold text-[#fe8d34] mb-3' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>{catalogue.name}</h2>
                {/* <p className='text-md font-light text-slate-500'>{formatCurrency(catalogue.price)}</p> */}
                <a href='https://forms.gle/9FMD75cAT66dwp6h8'><Button className='text-white bg-[#48852f] border-0 hover:bg-[#fe8d34]'
                  style={{
                    transition: 'all 300ms ease-in-out'
                  }}>
                  Make order</Button></a>
              </div>
            </div>
          </Card>
        ))}
      </Carousel>
    </section>
  );
};

export default Catalogue;
