import about from "../assets/about.jpg"
import { numbers } from '../constants'

export default function About() {
  return (
    <div className='mt-20 relative'>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full lg:w-1/2'>
          <img src={about} alt="Travel" className='rounded-tr-4xl' />
        </div>
        <div className='px-5 w-full lg:w-1/2'>
          <div className='px-5 mt-10 lg:mt-0'>
            <h1 className='font-semibold text-4xl'>About Us</h1>
            <h2 className='text-4xl mt-3'>Travia In <span className='bg-gradient-to-r from-amber-400 to-red-800 text-transparent bg-clip-text'>Numbers</span></h2>
            <p className='mt-5 mb-10'>At Travia, we believe travel is more than just visiting new places—it’s about creating lifelong memories. We specialize in tailored travel packages, from serene escapes to thrilling adventures, all designed to match your style.</p>
            <a href="#" className='py-3 px-4 rounded-md bg-gradient-to-r from-amber-600 hover:to-red-800 hover:from-yellow-500 to-red-900 hover:cursor-pointer'>Read More</a>

            <div className='flex flex-wrap justify-center mt-12 lg:w-1/2'>
              {numbers.map((number, index) => (
                <div key={index} className='w-2/4 p-5 border border-neutral-900 rounded flex flex-col justify-center items-center'><h3 className='font-bold text-4xl'>{number.value}</h3>
                  <p className='text-sm'>{number.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
