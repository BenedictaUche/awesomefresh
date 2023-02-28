import React from "react";
import { Card } from "react-bootstrap";

export function ProblemCard({ image, title, text }) {
    return (
        <Card className='flex flex-col shadow-md rounded-md'>
            <div className="bg-white overflow-hidden shadow-md w-80 h-80 relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-sm"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 transition duration-300 opacity-0">
                    <p className="text-white text-center opacity-100 transition duration-300">
                        {text}
                    </p>
                </div>
            </div>
            <div className=''>
                <h3 className="text-xl font-bold mb-4 text-center text-[#fe8d34] py-4">{title}</h3>
            </div>
            <style jsx>{`
        .bg-gray-800 {
          background-color: rgba(0, 0, 0, 0.5);
        }
        .bg-gray-800:hover {
          opacity: 1;
        }
        p {
          max-width: 80%;
        }
      `}</style>
        </Card>
    );
}
