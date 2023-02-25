// import { services } from "./items"
import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { faTractor, faMale, faLeaf, faBoxes, faBook } from '@fortawesome/free-solid-svg-icons';

let services = [
    {
        imageSrc: "./images/services-one-2.jpg",
        icon: faTractor,
        title: "Production",
        text: "We specialize in high-quality crops using sustainable and environmentally friendly practices",
        link: "agriculture-products.html",
    },
    {
        imageSrc: "https://media.istockphoto.com/id/1129849064/photo/organic-farming-is-the-natural-way.jpg?b=1&s=170667a&w=0&k=20&c=2CT5Kxs5B3hk-T0i0aT4jqXefn265426JrU2ECL-Amc=",
        icon: faMale,
        title: "Aggregation",
        text: "We produce high-quality crops using sustainable methods that protect the environment.",
        link: "organic-products.html",
    },
    {
        imageSrc: "https://media.istockphoto.com/id/1317777715/photo/top-view-of-worker-standing-by-apple-fruit-crates-in-organic-food-factory-warehouse.jpg?b=1&s=170667a&w=0&k=20&c=K8Pt_Rt8b5XZkdWecFnNgwVdGU2Ghi_bJTarHmTZ4lY=",
        icon: faBook,
        title: "Logistics & Consulting",
        text: "We offer specialized logistics and consulting services, optimizing supply chain for increased productivity and reduced costs.",
        link: "fresh-vegetables.html",
    },
    {
        imageSrc: "https://media.istockphoto.com/id/1353052837/photo/fresh-virgin-olive-oil-production-at-a-cold-press-factory-after-the-olives-harvesting.jpg?b=1&s=170667a&w=0&k=20&c=JfY9GUM5RsaocQI4rr4oXTYw7cRohli27oAPdZ-zBUw=",
        icon: faBoxes,
        title: "Cold Chain",
        text: "We specialize in maintaining the freshness and quality of your agricultural products through a precise cold chain process",
        link: "dairy-products.html",
    },
    // {
    //     imageSrc: "./images/services-one-2.jpg",
    //     icon: faBook,
    //     title: "Consulting",
    //     text: "I was impressed by the agrion services, not lorem ipsum is simply free text.",
    //     link: "dairy-products.html"
    // }
];

export function Services() {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    return (
        <section className="services-one relative py-[10%] mt-10" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
            <div classNamme='services__bg mb-[3%]'></div>
            <div>
                <div className='mb-7'>
                    <h1 className='text-center font-bold text-4xl'>Services we offer</h1>
                    <img src="./images/vine.png" alt="a vine" className='mx-auto block' />
                </div>
                <div className="flex flex-wrap justify-center">
                    {services.map((service, index) => (
                        <div
                            className="w-64 m-4 border-2 border-gray-300 rounded-lg overflow-hidden shadow-md hover:border-[#fe8d34] hover:shadow-lg transform hover:-translate-y-1 transition duration-200 ease-in-out"
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(-1)}
                        >
                            <div className="relative">
                                <Card.Img
                                    variant="top"
                                    src={service.imageSrc}
                                    alt=""
                                    className="h-64 w-full object-cover"
                                />
                                <div
                                    className={`${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                        } transition duration-200 ease-in-out absolute inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50`}
                                >
                                    <FontAwesomeIcon
                                        icon={service.icon}
                                        className="text-white text-5xl"
                                    />
                                </div>
                            </div>
                            <Card.Body className='bg-white'>
                                <Card.Title className='text-center'>
                                    <a href={service.link} className='hover:text-black' style={{ textDecoration: 'none' }}>{service.title}</a>
                                </Card.Title>
                                <Card.Text className="services-one__text text-center" >
                                    {service.text}
                                </Card.Text>
                            </Card.Body>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}