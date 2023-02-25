const Problem = () => {
  return (
    <>
      <section className='mt-10 mx-7 md:mx-[7%]'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='mb-5 md:mb-0 md:w-1/2 md:mr-5'>
            <img src="./images/problempic1.jpg" alt='the problem' className='w-[640px] md:h-[500px] object-cover rounded-2xl' />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-2xl md:text-4xl font-bold mb-3 md:mb-7 capitalize' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Problems <span className="text-[#48852f]">we</span> are trying to solve</h2>
            <p className='text-slate-400 text-base md:text-lg font-semibold mb-5'>We are addressing the problem of continuous raw material availability for local food processors, as well as the challenge of low yield and access to high-quality inputs, price information, and market access for smallholder farmers.</p>
            <p className='text-[#48852f] text-lg md:text-xl font-bold' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>We exist to bring innovation and organization into agriculture and food distribution, ultimately feeding 900 million people daily by 2050.</p>
          </div>
        </div>
      </section>
      <section className='mx-7 md:mx-5 mt-5'>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='mb-5 md:mb-0 md:w-1/2 md:ml-5'>
            <h2 className='text-2xl md:text-4xl font-bold mb-3 md:mb-7 capitalize' style={{ fontFamily: 'Josefin Sans, sans-serif' }}>our <span className="text-[#48852f]">solution</span></h2>
            <ul className='text-gray-400 md:w-[70%] font-bold text-base list-disc list-inside md:text-lg' >
              <li className='mb-3'>Smart aggregation and storage facility for smallholder farmers via out-grower scheme.</li>
              <li className='mb-3'>USSD solutions that provide farmers with market intelligence and valuable resources and for data collection.</li>
              <li>Investable Opportunity to help young Africans own, monitor and invest in farms from their mobile devices.</li>
            </ul>
          </div>
          <div className='md:w-1/2'>
            <img src="./images/happygirl.jpg" alt='the problem' className='w-full md:h-full object-cover rounded-2xl' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Problem;
