const Certificate = () => {
  return (
    <div className='my-20 md:w-[750px] lg:w-[800px] mx-auto  shadow-lg'>
      <div className='bg-primary-green px-8 py-3 text-white rounded-t-xl'>
        <h1 className='text-[26px]  font-semibold leading-[150%] md:text-center max-w-sm md:max-w-full'>
          claim and download your greenWeb certificate
        </h1>
      </div>

      <div className='border-[1px] border-gray-400'>
        <div className='w-48 mx-auto my-8'>
          <img
            className='w-full'
            src='https://everythinggreen.org/assets/logo-08fd2361.svg'
            alt='greenWeb'
          />
        </div>
        <p className=' text-center text-[#333333] font-roboto text-lg px-8 md:px-4 -mt-2 pb-8'>
          The green<span className='text-[#4E9E76]'>Web</span> team designed
          this website's carbon calculator to inspire and enlighten people about
          the importance of creating websites with low carbon emissions.
        </p>
      </div>
    </div>
  );
};
export default Certificate;
