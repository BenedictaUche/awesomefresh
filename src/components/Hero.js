// import logo from './images/hero.jpg';
import { Button, Container } from 'react-bootstrap'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

export function Hero() {
    return (
        <div>
            <Slider {...settings}>
                <div className="section__hero">
                    {/* <img src="./images/hero.jpg" alt="" /> */}
                    <div className='' style={{
                        transform: 'translate(0, -7%)',
                        zIndex: 1
                    }}>
                        <Container className="">
                            <div className='mt-[12%]' style={{
                                border: 'none',
                                borderRadius: '16px',
                                display: 'inline-block',
                                height: '36px',
                            }}>
                                <h1 className='text-[#fe8d34] font-bold text-8xl mb-4 animate__animated animate__backInDown' style={{ fontFamily: 'Kaushan Script, cursive' }}>
                                    <span>Awesome Fresh</span>
                                </h1>
                                <p className='text-white text-md mb-6 animate__animated animate__fadeInLeft' style={{ lineHeight: '1.875', letterSpacing: '2px' }}>We serve as a bridge between local food processors and <br /> manufacturers and smallholders farmers.</p>
                                <a href="/"><Button className='md:w-[30%] bg-[#48852f] border-0 hover:bg-[#48852f] hover:opacity-[0.7] duration-500 py-3 uppercase animate__animated animate__slideInUp' style={{ transition: 'all 300ms ease-in-out' }}>Read more</Button></a>
                            </div>

                        </Container>
                    </div>
                </div>
                <div className="section__hero__one">
                    <div className='' style={{
                        transform: 'translate(0, -7%)',
                        zIndex: 1
                    }}>
                        <Container className="">
                            <div className='mt-[12%]' style={{
                                border: 'none',
                                borderRadius: '16px',
                                display: 'inline-block',
                                height: '36px',
                            }}>
                                <h1 className='text-[#fe8d34] font-bold text-6xl mb-4 animate__animated animate__backInDown' style={{ fontFamily: 'Kaushan Script, cursive' }}>
                                    <span>SMART AGGREGATION</span>
                                </h1>
                                <p className='text-black text-md mb-6 animate__animated animate__fadeInLeft' style={{ lineHeight: '1.875', letterSpacing: '2px' }}>We serve as a bridge between local food processors and <br /> manufacturers and smallholders farmers.</p>
                                <a href="/"><Button className='md:w-[30%] bg-[#48852f] border-0 hover:bg-[#48852f] hover:opacity-[0.7] duration-500 py-3 uppercase animate__animated animate__slideInUp' style={{ transition: 'all 300ms ease-in-out' }}>Read more</Button></a>
                            </div>

                        </Container>
                    </div>
                </div>
                <div className="section__hero__two">
                    <div className='' style={{
                        transform: 'translate(0, -7%)',
                        zIndex: 1
                    }}>
                        <Container className="">
                            <div className='mt-[12%]' style={{
                                border: 'none',
                                borderRadius: '16px',
                                display: 'inline-block',
                                height: '36px',
                            }}>
                                <h1 className='text-white font-bold text-7xl mb-4 animate__animated animate__backInDown' style={{ fontFamily: 'Kaushan Script, cursive' }}>
                                    <span>Sustainable and inclusive agriculture</span>
                                </h1>
                                <p className='text-white text-md mb-6 animate__animated animate__fadeInLeft md:w-[70%]' style={{ lineHeight: '1.875', letterSpacing: '2px' }}>We provide alternatives to reliance on importation by supporting local food production and distribution</p>
                                <a href="/"><Button className='md:w-[30%] bg-[#fe8d34] border-0 hover:bg-[#fe8d34] hover:opacity-[0.7] duration-500 py-3 uppercase animate__animated animate__slideInUp' style={{ transition: 'all 300ms ease-in-out' }}>Read more</Button></a>
                            </div>
                        </Container>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

