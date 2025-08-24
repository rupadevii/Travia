import { testimonials } from '../constants'

export default function Testimonials() {
    return (
        <div className='mt-10 mx-20 lg:px-20 pt-20'>
            <div className='text-center'>
                <h1 className='lg:text-5xl text-4xl font-semibold bg-gradient-to-r from-amber-400 to-red-900 text-transparent bg-clip-text'>Testimonials</h1>
                <p className='mt-5 lg:w-3xl mx-auto text-neutral-300'>Every trip tells a story, and our travelers have plenty to share. From family holidays to solo adventures and corporate retreats, Travia has been a trusted partner in turning journeys into unforgettable memories..</p>
            </div>

            <div className='lg:flex pt-20 lg:p-20 gap-5 overflow-auto no-scrollbar'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='w-full lg:w-1/2 flex-shrink-0 justify-center items-center mt-3 border border-neutral-700 rounded-xl p-7'>
                        <div className='mt-3 text-center'>
                            <h5>{testimonial.view}</h5>
                            <p className='mt-2 text-neutral-400'> - {testimonial.name}</p>
                            <h6 className='bg-gradient-to-r from-amber-400 to-red-900 text-transparent bg-clip-text text-5xl mt-3'>❝❞</h6>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}
