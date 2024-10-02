import { FaChevronUp } from "react-icons/fa";

const SecondText = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className='font-roboto mt-24 text-xl lg:text-2xl text-fontColor font-light leading-[150%] text-center px-8'>
        These websites avoid bloated frameworks by using compressed graphics,
        efficient file formats, and lightweight fonts. Check out our information
        on developing sustainable websites and establishing a page weight budget
        if you want to learn more.
      </h1>
      <button
        className='bg-[#223333] border-[2px] border-white ml-3 button-content mt-6 rounded-full px-5 py-[5px] text-white hover:bg-primary-green hover:border-black hover:transition hover:duration-300 shadow-button flex items-center'
        type='button'
      >
        <FaChevronUp />
        <span className='ml-2 font-semibold text-base'>test now</span>
      </button>
    </div>
  );
}

export default SecondText