import React from 'react';
import { ProblemCard } from '../components/ProblemCard'

export function Problem() {
    return (
        <section className=" py-20">
            <div className="" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
                <div className='mx-4'>
                    <h1 class='text-center mx-auto font-bold text-4xl md:text-6xl mt-10 md:w-[70%] text-[#48852f]' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>"The world will need more food in the next 50 years than it has in the past 500 years."</h1>
                    <p className='text-center text-2xl font-bold mt-10 mb-[8%] text-[#48852f]' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>- FAO</p>
                </div>
                <div className='relative'><img src='./images/services-section.png' alt='a service' className='animate-dance' /></div>
                <div className='problem__section bg-[#f1efe9] py-6'>
                    <h2 className="text-4xl text-center font-bold" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>The Problems</h2>
                    <img src="./images/vine.png" alt="a vine" className='mx-auto block mb-10' />
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <ProblemCard
                            image='https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                            title="Raw Material Inconsistency"
                            text="Local processors and manufacturers in Africa face the challenge of ensuring a steady supply of raw materials for their operations."
                        />
                        <ProblemCard
                            image='https://media.istockphoto.com/id/1438708688/photo/aerial-view-of-straw-bales-on-farm-fields.jpg?b=1&s=170667a&w=0&k=20&c=IHRHu2ouzuDbsOzfKbe_JvB1R0UfyC4IdqMz2Pv1V8g='
                            title="Low Agricultural Yields"
                            text="Due to a lack of access to quality information, inputs, and finance for their farming activities, 38 million Nigerian farmers have one of the lowest agricultural yields per hectare in the world."
                        />
                        <ProblemCard
                            image='./images/problempic1.jpg'
                            title="Lack of Market Access"
                            text="The most significant challenge that smallholder farmers face across Africa is a lack of access to profitable markets."
                        />
                        <ProblemCard
                            image='https://media.istockphoto.com/id/1423496853/photo/water-pipe-break-leaking-from-hole-in-a-hose-connection-joint-of-plastic-pipes-water-supply.jpg?b=1&s=170667a&w=0&k=20&c=HTKxOei9yK5wHeT0EIIjdXJlJDgoWHgOP-bezaL3N1c='
                            title="Fragmented Production"
                            text="Smallholder farmers dominate food production in Nigeria, making aggregation for local processing difficult."
                        />
                        <ProblemCard
                            image='https://images.unsplash.com/photo-1621460249485-4e4f92c9de5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFncmljdWx0dXJhbCUyMHBvc3QlMjBoYXJ2ZXN0JTIwbG9zc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                            title="Post-Harvest Loss"
                            text="Poor post-harvest handling and storage operations result in the loss of approximately $4 billion in food products each year."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};



