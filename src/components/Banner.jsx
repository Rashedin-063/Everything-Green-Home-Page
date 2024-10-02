import { BsExclamation } from 'react-icons/bs';
import BannerImg from '../assets/banner-image.png';
import CustomTooltip from './CustomTooltip';

const Banner = () => {

  const TooltipText = (
    <>
      <p>
        Find out how many visitors from different traffic sources interact with
        your website.
      </p>
    </>
  );


  return (
    <div className='h-[642px] bg-custom-gradient py-8 flex flex-col-reverse lg:flex-row'>
      {/* text part */}

      <div className='h-1/2 md:h-1/4 lg:h-full lg:w-1/2 lg:gap-8 text-white flex flex-col justify-center px-2 md:pl-12 lg:pl-16 xl:pl-20 md:pt-20 lg:-mt-[70px] xl:-mt-4 space-y-6 md:space-y-6 text-center md:text-start'>
        <h1 className='text-4xl lg:text-[2.6vw]  font-bold lg:tracking-wide lg:leading-10 xl:leading-[50px] '>
          Unlock Insights for a Greener Future!
        </h1>
        <p className=' font-sans text-sm md:text-base  lg:text-[1.4vw]  xl:text-[1.1vw] tracking-wide font-semibold flex relative'>
          Download our comprehensive whitepaper now and embark on a journey
          towards a more sustainable future.{' '}
          <span className='absolute bottom-1 -right-1 md:right-[530px] lg:right-[135px] xl:right-[450px] xxl:right-[490px] cursor-pointer'>
            <CustomTooltip
              title={TooltipText}
              arrow
            >
              <svg
                width='13'
                height='12'
                viewBox='0 0 13 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='0.40625'
                  y='0.259766'
                  width='11.5'
                  height='11.5'
                  rx='5.75'
                  stroke='#b2d8d8'
                  strokeWidth='0.5'
                ></rect>
                <path
                  d='M7.10025 4.48021L5.26821 4.70982L5.20261 5.01382L5.56262 5.08022C5.79782 5.13623 5.84422 5.22103 5.79302 5.45543L5.20261 8.22988C5.04741 8.9475 5.28661 9.2851 5.84903 9.2851C6.28503 9.2851 6.79144 9.0835 7.02105 8.8067L7.09145 8.47389C6.93145 8.61469 6.69784 8.67069 6.54264 8.67069C6.32263 8.67069 6.24263 8.51629 6.29943 8.24429L7.10025 4.48021ZM7.15625 2.80978C7.15625 3.02196 7.07196 3.22545 6.92193 3.37548C6.7719 3.52551 6.56841 3.6098 6.35623 3.6098C6.14406 3.6098 5.94057 3.52551 5.79054 3.37548C5.64051 3.22545 5.55622 3.02196 5.55622 2.80978C5.55622 2.5976 5.64051 2.39412 5.79054 2.24408C5.94057 2.09405 6.14406 2.00977 6.35623 2.00977C6.56841 2.00977 6.7719 2.09405 6.92193 2.24408C7.07196 2.39412 7.15625 2.5976 7.15625 2.80978Z'
                  fill='#b2d8d8'
                ></path>
              </svg>
            </CustomTooltip>
          </span>
        </p>
        <button className='bg-[#d9d9d9] text- w-[210px] rounded-full py-4 px-8 shadow-custom text-fontColor hover:bg-transparent hover:transition hover:duration-100 font-bold font-sans mx-auto lg:mx-0'>
          Download Now!
        </button>
      </div>

      {/*image   */}
      <div className='h-1/2 md:h-3/4 lg:h-full lg:w-1/2 flex items-center flex-col'>
        <div className='border-[0.1px] border-black mb-4 md:mb-0 border-opacity-25 block md:hidden w-full -mt-4'></div>

        <img
          className='-mt-20 md:-mt-36  lg:-mt-0'
          src={BannerImg}
          alt='Banner Image'
        />
      </div>
    </div>
  );
};
export default Banner;
