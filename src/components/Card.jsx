const Card = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2  gap-12 mt-12 max-w-4xl w-1/2 md:w-full mx-auto  text-center font-roboto'>
      {/* first card */}
      <div className=''>
        <img
          className='w-[90%] h-[150px] drop-shadow-lg border-r-[1px] border-l-[1px] border-black border-opacity-25'
          src='https://everythinggreen.org/assets/google-0effc151.png'
          alt='Google Cover Photo'
        />
        <div className='mt-6 text-secondaryColor '>
          <h1 className='text-lg font-bold'>Google</h1>
          <p>0.26gm/per visit</p>
        </div>
      </div>

      {/* second card */}
      <div className=''>
        <img
          className='w-[90%] h-[150px] drop-shadow-lg border-r-[1px] border-l-[1px] border-black border-opacity-25'
          src='https://everythinggreen.org/assets/facebook-cdaf40bf.png'
          alt='Facebook Cover Photo'
        />

        <div className='mt-6 text-secondaryColor '>
          <h1 className='text-lg font-bold'>Facebook</h1>
          <p>0.21gm/per visit</p>
        </div>
      </div>

      {/* third card */}
      <div className=''>
        <img
          className='w-[90%] h-[150px] drop-shadow-lg border-r-[1px] border-l-[1px] border-black border-opacity-25'
          src='https://everythinggreen.org/assets/alphabet-2dd8e6ce.png'
          alt='Alphabet Cover Photo'
        />

        <div className='mt-6 text-secondaryColor '>
          <h1 className='text-lg font-bold'>Alphabet</h1>
          <p>0.094gm/per visit</p>
        </div>
      </div>

      {/* fourth card */}
      <div className=''>
        <img
          className='w-[90%] h-[150px] drop-shadow-lg border-r-[1px] border-l-[1px] border-black border-opacity-25'
          src='https://everythinggreen.org/assets/red-inc-e83de883.png'
          alt='Red-Inc Cover Photo'
        />

        <div className='mt-6 text-secondaryColor '>
          <h1 className='text-lg font-bold'>Red-Inc</h1>
          <p>0.230gm/per visit</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
