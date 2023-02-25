import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faUserFriends, faCubes, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';

function Metric({ icon, number, text, delay }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => {
                const increment = Math.ceil((number - count) / 10);
                return count + increment;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [number]);

    return (
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg px-4 py-6 text-center">
                <div className="mx-auto text-gray-600 mb-4">
                    <FontAwesomeIcon icon={icon} className="text-4xl text-[#fe8d34]" />
                </div>
                <div className="text-5xl font-bold">{count}</div>
                <div className="text-gray-600" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>{text}</div>
            </div>
        </div>
    );
}

export function Metrics() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4 animate__animated animate__bounceInRight animate__delay-3s pt-[7%]">
                <Metric icon={faDollarSign} number={672} text="Revenue (in millions) in 2022" delay={0} />
                <Metric icon={faUserFriends} number={2500} text="Farmers engaged" delay={300} />
                <Metric icon={faCubes} number={20000} text="MT of agricultural produce aggregated" delay={500} />
                <Metric icon={faBriefcase} number={40} text="Direct and indirect jobs created" delay={900} />
            </div>
        </div>
    );
}

