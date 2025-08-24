export default function MainSection() {
  return (
    <div className='grid grid-cols-5 items-start mx-20 py-60 min-h-[550px] relative'>
      <div className='lg:col-start-2 col-start-1 lg:col-span-2 col-span-5 p-3'>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide bold'>Explore The World With <span className='bg-gradient-to-r from-amber-400 to-red-800 text-transparent bg-clip-text'>{" "}Travia</span></h1>
        <p className='my-7 text-lg'>Curated journeys, unforgettable experiences, and hassle-free travel planning.</p>
        <a href="#" className='py-3 px-4 mt-5 rounded-md bg-gradient-to-r from-amber-600 to-red-800  hover:from-yellow-400 hover:to-red-600'>Book Now</a>
      </div>
    </div>
  )
}
