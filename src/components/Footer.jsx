import logo from "../assets/logo.png"
import { QuickLinks, SupportLinks } from "../constants"
import { socialMediaIcons } from "../constants"

export default function Footer() {
    return (
        <div className='py-30 px-20 lg:px-50'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="col-span-1">
                    <img src={logo} alt="logo" className="h-20" />
                    <p className="mb-7">Crafting memories, one trip at a time.</p>
                    <ul className="flex gap-8">
                        {socialMediaIcons.map((item, index) => (
                            <li key={index} className="border rounded-xl border-amber-600 shadow-red-700 p-3 hover:bg-gradient-to-r from-amber-500 to-red-600 hover:cursor-pointer"><a href="#"><i className={`fa fa-${item} fa-2x`}></i></a></li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h1 className="font-semibold text-xl my-5">Quick Link</h1>
                        <ul>
                            {QuickLinks.map((item, index) => (
                                <li key={index} className="mb-2"><a href={item.href}>{item.text}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold text-xl my-5">Support</h1>
                        <ul>
                            {SupportLinks.map((item, index) => (
                                <li key={index} className="mb-2"><a href={item.href}>{item.text}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-semibold text-xl my-5">Subscribe Newsletter</h1>
                    <p className="mb-5">Subscribe and get latest info and updates.</p>
                    <form className="absolute">
                        <input
                            name="email"
                            type="text"
                            placeholder="Enter email"
                            className="rounded-lg py-3 px-7 border border-neutral-400" />
                        <button type="submit" className="relative right-9 bg-gradient-to-r from-amber-400 to-red-800  hover:from-yellow-400 hover:to-red-600 hover:cursor-pointer p-2 rounded-r-lg"><i className="fa fa-arrow-right"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
