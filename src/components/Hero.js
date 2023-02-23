// import logo from './images/hero.jpg';
// import { Button } from 'react-bootstrap'

import { Button, Container } from "react-bootstrap";
import 'animate.css';

export function Hero() {
    return (
        <>
            <section class='section'>

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
            </section>
        </>

    )
}