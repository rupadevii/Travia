import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog2.jpg"
import blog3 from "../assets/blog3.jpg"

export default function Blog() {
    return (
        <div className='mt-5 mx-10 lg:mx-20 md:p-20 pb-10 relative'>
            <div className='text-center'>
                <h1 className='lg:text-5xl text-3xl font-semibold bg-gradient-to-r from-amber-400 to-red-900 text-transparent bg-clip-text'>Recent Blog Posts</h1>
                <p className='mt-5 lg:w-3xl mx-auto text-neutral-300'>Get inspired for your next adventure with travel tips, destination guides, and stories from around the world.</p>
            </div>

            <div className='lg:grid grid-cols-2 gap-25 lg:p-20'>
                <div className='mt-7'>
                    <img src={blog1} alt="blog" />
                    <div className='mt-5'>
                        <h2 className='text-xl'>Top 7 Things to Do in Japan Beyond Tokyo</h2>
                        <p className='mt-3 text-neutral-400'>Japan is more than just Tokyo’s neon lights. From the historic temples of Kyoto to the breathtaking Arashiyama Bamboo Forest and the hot springs of Hakone, this guide takes you through experiences that reveal the heart of Japanese culture. Perfect for first-time visitors and seasoned travelers alike.</p>
                    </div>
                </div>
                <div className='mt-7'>
                    <div className='mb-10 flex'>
                        <img src={blog2} alt="blog" />
                        <div className='ml-4'>
                            <h3 className="text-xl">A Traveler’s Guide to Malaysia’s Hidden Gems</h3>
                            <p className="text-neutral-400 my-2">Beyond Kuala Lumpur’s skyscrapers lies a world of tropical beauty and cultural treasures. </p>
                            <a href="#" className="bg-gradient-to-r from-amber-400 to-red-900 text-transparent bg-clip-text my-2">Read More</a>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src={blog3} alt="blog" />
                        <div className='ml-4'>
                            <h3 className="text-xl">USA Highlights: 5 Cities You Must Visit Once in a Lifetime</h3>
                            <p className="text-neutral-400 my-2"> Discover the must-visit cities that capture America’s diversity and charm, with tips on what to see and do in each.</p>
                            <a href="#" className="bg-gradient-to-r from-amber-400 to-red-900 text-transparent bg-clip-text my-2">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
