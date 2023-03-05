import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#fe8d34] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:opacity-[0.7] duration-500' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>
      {props.children}
    </button>
  )
}

export default Button
