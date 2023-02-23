import React from 'react'
import { Card, Container } from 'react-bootstrap'
import 'animate.css';

const About = () => {
  return (
    <section className='md:mt-[10%] mt-[10%]' id='about-us'>
      <Container>
        <h1 className='uppercase font-bold text-4xl text-center mb-4 mt-7 text-[#fe8d34]' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>about us</h1>
        <p className='text-center mt-2 mb-4' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Awesome Fresh is a group of dedicated individuals
          committed to providing the world with healthy
          food, nutrition, and inspiration. We are an
          agricultural aggregation, logistics, and cold
          chain company, serving as a bridge between local
          food processors and manufacturers and smallholders
          farmers.</p>
        <div className='flex flex-wrap justify-center'>
          <Card className='bg-[#48852f] px-4 py-4 w-full md:w-[32%] md:m-2 shadow-md mb-3 animate__animated animate__fadeInRight'>
            <h3 className='text-[#fe8d34] uppercase text-center mb-2' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>our goal</h3>
            <p className='text-white'>
              Our goal is to bring innovation and
              organization to agriculture and food
              distribution while improving access to
              fresh, nutritious food for growing urban
              communities globally.
            </p>
          </Card>
          <Card className='bg-[#48852f] px-4 py-4 w-full md:w-[32%] md:m-2 shadow-md mb-3'>
            <h3 className='text-[#fe8d34] uppercase text-center mb-2' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>core mission</h3>
            <p className='text-white'>
              To help the world and its people live
              healthier and happier by making food
              cheaper, fresher, nutritious, and accessible
              to the growing urban communities of the world,
              bringing innovation and organization in agriculture
              and food distribution.
            </p>
          </Card>
          <Card className='bg-[#48852f] px-4 py-4 w-full md:w-[32%] md:m-2 shadow-md mb-3'>
            <h3 className='text-[#fe8d34] uppercase text-center mb-2' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>core vision</h3>
            <p className='text-white'>
              Serve humanity for 496 years to come, become
              the best natural foods company in every
              community it serves globally, become a fully
              integrated company that delivers farm-to-fork
              globally, profitably feed 900 million people daily
              by 2050, and become one of the top 4 food and
              agricultural distribution companies in Africa by 2020.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default About
