import React from "react";
import { Card } from "react-bootstrap";

export function ProblemCard({ image, title, text }) {
    return (
        <Card className='flex flex-col shadow-md rounded-md'>
            <div className="bg-white overflow-hidden shadow-md w-80 h-80 relative">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-t-sm transition-transform duration-400 hover:transform hover:scale-120" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
                    <p className="text-white text-center opacity-0 transition duration-300 hover:opacity-100">
                        {text}
                    </p>
                </div>
            </div>
            <div className=''>
                <h3 className="text-xl font-bold mb-4 text-center text-[#fe8d34] py-4">{title}</h3>
            </div>
        </Card>
    );
}

