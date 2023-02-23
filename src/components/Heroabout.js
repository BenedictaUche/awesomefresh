// import logo from './images/hero.jpg';
// import { Button } from 'react-bootstrap'

import {Container } from "react-bootstrap";
import 'animate.css';

export function Heroabout() {
    return (
        <>
            <section class='section-about'>

                <div className='' style={{
                    transform: 'translate(0, -7%)',
                    zIndex: 1
                }}>
                    <Container className="">
                        <div className='md:pt-[10%] pt-[15%]' style={{
                            border: 'none',
                            borderRadius: '16px',
                           
                            height: '36px',
                        }}>
                            <h1 className='text-white font-bold text-center text-4xl mb-4 animate__animated animate__backInDown' style={{fontFamily: 'Kaushan Script, cursive'}}>
                                <span>About our farm</span>
                            </h1>
                            <p className='text-white text-center text-md mb-6 animate__animated animate__fadeInLeft' style={{lineHeight: '1.875', letterSpacing: '2px'}}>Home / About Us</p>
                        </div>
                    </Container>
                </div>
            </section>
        </>

    )
}