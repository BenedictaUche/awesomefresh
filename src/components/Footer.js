import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faEnvelope,
//   faLocationArrow,
//   faMobilePhone,
// } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="flex md:flex-row flex-col flex-wrap p-4 md:flex-nowrap md:justify-between bg-[#fe8d34] mt-4" id='footer'>
            <div className="mb-4 md:mb-0">
                <img
                    src="./images/awesometransparent.png"
                    alt="freshawesome logo"
                    className="md:w-48 h-auto w-52"
                />
                <p className=" text-md md:w-[300px]" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                    Awesome Fresh is an agricultural aggregation, logistics, and cold
                    chain company that is helping Africa feed itself sustainably for the
                    long term.
                </p>
            </div>
            <div className='mt-[5%]'>
                <h2 className='font-bold text-2xl mb-4 text-white' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Contact us</h2>
                <div className='flex flex-col'>
                    <div className='flex text-white mb-2'>
                        <h2 className='mr-4 font-bold'>Address:</h2>
                        <ul>
                            <li>72, Yakubu Gowon Way,
                                Zaramangada Jos
                            </li>
                            <li>Plateau state - Nigeria</li>
                        </ul>
                    </div>
                    <div className='mt-2 mb-3' style={{ border: '1px solid #d3d3d3' }}></div>

                    <div className='flex text-white mb-2'>
                        <h2 className='mr-4 font-bold'>Phone:</h2>
                        <p>(+234) 80-627-537-37</p>
                    </div>
                    <div className='mt-2 mb-3' style={{ border: '1px solid #d3d3d3' }}></div>
                    <div className='flex text-white'>
                        <h2 className='mr-4 font-bold'>Email:</h2>
                        <p>adetiloye@awesomefresh.ng</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col mt-[5%] mr-7'>
                <h2 className='font-bold text-2xl mb-4 text-white' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Follow us</h2>
                <div className=''>
                    <ul className='flex md:justify-between'>
                        <li><a href='/'><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li className='ml-3'><a href='/'><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li className='ml-3'><a href='/'><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        <li className='ml-3'><a href='https://instagram.com/awesomefreshng?igshid=YmMyMTA2M2Y=' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
            </div>

        </footer>
    )
};

export default Footer;
