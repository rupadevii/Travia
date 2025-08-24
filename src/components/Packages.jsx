import { packages } from '../constants'

export default function Packages() {
  return (
    <div className='relative mt-30 p-15'>
        <div className='text-center'>
            <h1 className='text-4xl lg:text-5xl'>Trip Packages</h1>
            <p className='mt-5 max-w-xl mx-auto'>At Travia, we bring the world closer to you with thoughtfully curated travel packages designed for every kind of traveler. Whether you’re seeking cultural adventures, modern cityscapes, or natural wonders, we’ve got the perfect journey waiting for you.</p>
        </div>
        
        <div className='lg:grid grid-cols-3 mt-10 lg:mx-40 md:mx-20 lg:mt-20 gap-5'>
            {packages.map((item, index) => (
                <div key={index} className='mb-2 flex flex-col lg:col-span-1 sm:col-span-3 border-b border-neutral-800  hover:bg-gradient-to-r from-amber-500 to-red-700'>
                    <img src={item.img} alt={item.place} className='w-full sm:max-w-sm md:max-w-md lg:max-w-lg'/>
                    <div className='p-4'>
                        <h2 className='text-xl'>{item.place}</h2>
                        <p className='text-lg mt-1 text-neutral-500'>From {item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
