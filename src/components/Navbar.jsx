import { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { navItems } from '../constants'
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 800);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function toggleNavbar() {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <header className={`fixed top-0 left-0 w-full z-50 border-b border-neutral-700/80 ${scrolled ? "bg-black shadow-md" : "backdrop-blur-sm"}`}>
            <nav className="container mx-auto flex justify-between items-center py-3 px-6 md:px-12">
                <div className='container px-4 mx-auto relative text-sm'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img src={logo} alt="logo" className='h-15' />
                        </div>

                        <ul className='hidden lg:flex ml-14 space-x-10'>
                            {navItems.map((items, index) => (
                                <li key={index}>
                                    <a href={items.href} className='text-base'>{items.label}</a>
                                </li>
                            ))}
                        </ul>

                        <div className='lg:hidden md::flex flex-col justify-end'>
                            <button onClick={toggleNavbar} className='hover: cursor-pointer'>
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>

                    {mobileDrawerOpen && (
                        <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                            <ul>
                                {navItems.map((item, index) => (
                                    <li key={index} className='py-4'>
                                        <a href={item.href}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}