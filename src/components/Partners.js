import 'animate.css';

export function Partners() {
    return (
        <section>
            <div>
                <h1 className='text-center text-[#fe8d34] font-bold text-4xl pt-[5%]' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Partners</h1>
                <img src="./images/vine.png" alt="a vine" className='mx-auto block' />
                <div className="flex row animate__animated animate__backInRight animate__delay-4s">
                    <img src='./images/partner-1.png' alt='' className='h-40 w-40  mx-auto my-4 object-cover p-2' />
                    <img src='./images/partner-2.png' alt='' className='h-30 w-30 rounded-full  mx-auto my-4 object-cover p-2' />
                    <img src='./images/partner-3.png' alt='' className='h-40 w-40  mx-auto my-4 object-cover p-2' />
                    <img src='./images/partner-4.png' alt='' className='  mx-auto my-4 object-cover p-2' />
                    <img src='./images/partner-5.png' alt='' className='h-40 w-40 rounded-full  mx-auto my-4 object-cover p-2' />
                </div>
            </div>
        </section>
    )
}