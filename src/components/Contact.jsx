export default function Contact() {
    return (
        <div className='mt-10 lg:px-40 py-20  bg-neutral-800'>
            <div className='text-center'>
                <h1 className='lg:text-5xl text-4xl font-semibold bg-gradient-to-r from-amber-400 to-red-900 text-transparent bg-clip-text'>Get in Touch</h1>
                <p className='mt-5 lg:w-3xl mx-auto text-neutral-300'>Have questions or ready to plan your next adventure?</p>
            </div>

            <form className='p-10 mx-auto'>
                <div className='grid lg:grid-cols-2 gap-6'>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full px-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 mr-3"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        className="w-full px-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                    <select name="place" className="w-full px-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400">
                        <option value="trip-1">Trip 1</option>
                        <option value="trip-2">Trip 2</option>
                        <option value="trip-3">Trip 3</option>
                    </select>

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="5"
                        className="w-full col-span-2 px-4 py-4 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                    ></textarea>
                    <div className=''>
                        <button type="submit" className='bg-gradient-to-r from-amber-600 to-red-800 py-3 px-6 rounded-full hover:cursor-pointer hover:from-yellow-400 hover:to-red-600'>Send Message</button>
                    </div>
                </div>
            </form>
        </div>


    )
}
