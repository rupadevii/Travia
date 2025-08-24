import { services } from '../constants'

export default function Services() {
    return (
        <div className='mt-20 mx-20 lg:p-20 border-b border-neutral-400 pb-10'>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold bg-gradient-to-r from-amber-400 to-red-800 text-transparent bg-clip-text'>Services we provide</h1>
                <p className='mt-5 lg:w-3xl mx-auto text-neutral-300'>Your journey, made effortless. From the first click to the last memory, we take care of every detail so you can focus on the adventure.</p>
            </div>

            <div className='lg:flex pt-20 lg:p-20 gap-5'>
                {services.map((service, index) => (
                    <div key={index} className='flex flex-col justify-center items-center mt-5'>
                        <div className='flex h-10 w-10 p-2 mx-2 rounded-full justify-center items-center bg-neutral-900 border border-amber-600 hover:bg-gradient-to-r from-amber-500 to-red-800 cursor-pointer '>
                            {service.icon}
                        </div>
                        <div className='mt-3 text-center'>
                            <h5 className='font-medium text-xl'>{service.text}</h5>
                            <p className='mt-2 text-neutral-400'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
