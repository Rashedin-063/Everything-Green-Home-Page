
const Newsletter = () => {
  return (
    <>
      <div className='border border-gray-300 rounded-xl mt-8 px-9 py-7 max-w-xl shadow-2xl mx-auto'>
        <h1 className='text-[26px] font-medium text-primary-green text-center mb-6 font-roboto tracking-[0.005em]'>
          join the greenWeb newsletter
        </h1>

        <form className='flex gap-2'>
          <input
            className='form-control pl-8 h-[43px] bg-[#ececec] rounded-full placeholder:text-[#37654e] w-3/4 tracking-[4px]'
            type='search'
            id='jobSearchText'
            placeholder='your email address'
          />

          <button
            className='bg-[#223333] border-[2px] border-white ml-3 button-content rounded-full px-4 h-[43px]  text-white hover:bg-primary-green hover:border-black hover:transition hover:duration-300 shadow-button flex items-center'
            type='submit'
          >
            <div className='button-content _button-content_1e6um_132'>
              subscribe
            </div>
          </button>
        </form>

        <div className='ml-6 text-sm text-[#7c7c7c] mt-5 leading-[1.5]'>
          The greenWeb team will send you occasional updates on web
          accessibility and sustainability. There will be no spam, only
          high-quality information.
        </div>
      </div>
    </>
  );
}
export default Newsletter