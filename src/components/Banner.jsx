import BannerImg from '../assets/banner-image.png'

const Banner = () => {
  return (
    <div className='h-[600px] bg-custom-gradient py-8 flex flex-col-reverse lg:flex-row'>
      {/* text part */}
      <div className='sm:h-2/5 h-3/4 lg:h-full lg:w-1/2 lg:gap-8 text-white flex flex-col justify-center lg:pl-16 lg:space-y-8'>
        <h1 className='text-4xl lg:text-[4vw] font-bold tracking-wide lg:leading-[50px]'>
          Unlock Insights for a Greener Future!
        </h1>
        <p className='font-sans lg:text-[1.6vw]  xl:text-[1.2vw]  font-semibold'>
          Download our comprehensive whitepaper now and embark on a journey
          towards a more sustainable future.
        </p>
        <button className='bg-[#d9d9d9] text-black w-[210px] rounded-full py-4 px-8 shadow-custom hover:bg-transparent font-bold font-sans'>
          Download Now!
        </button>
      </div>

      {/*image   */}
      <div className='lg:w-1/2 flex items-center flex-col'>
        <div className='border border-black mb-6 border-opacity-35 block md:hidden w-full'></div>

        <img
          className='-mt-20 md:-mt-36 lg:-mt-0'
          src={BannerImg}
          alt='Banner Image'
        />
      </div>
    </div>
  );
}
export default Banner