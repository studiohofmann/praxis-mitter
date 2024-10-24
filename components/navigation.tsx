'use client';

import { useState, useEffect, useCallback } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Logo from './logo';
import NavigationLinks from './navigation-links';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false); // State to track scrolling

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setShowNavbar(false); // Scrolling down, hide navbar
        } else {
            setShowNavbar(true); // Scrolling up, show navbar
        }

        setLastScrollY(currentScrollY);

        // Change background color if scrolled more than 50 pixels
        setIsScrolled(currentScrollY > 50);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    // Disable body scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            // Add overflow-hidden class to body to prevent scrolling
            document.body.classList.add('overflow-hidden');
        } else {
            // Remove overflow-hidden class when menu is closed
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup in case the component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    return (
        <nav className={`fixed w-screen z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${isScrolled || isOpen ? 'bg-norway400' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto pt-4 pr-8 pb-4 pl-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        {/* Logo */}
                        <Logo />
                    </div>
                    {/* Menu Icon for Mobile */}
                    <div className="flex md:hidden">
                        <div onClick={toggleMenu} className="flex gap-4 border border-2 border-norway600  hover:border-norway800 px-4 py-2 text-norway600 hover:text-norway800 cursor-pointer duration-300 ease-in-out">
                            Menü
                            {isOpen ? (
                                <CloseOutlined />
                            ) : (
                                <MenuOutlined className='' />
                            )}
                        </div>
                    </div>
                    {/* Menu for Desktop */}
                    <div className="hidden md:flex md:gap-4">
                        <NavigationLinks toggleMenu={toggleMenu} />
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on isOpen state */}
            {isOpen && (
                <div className="md:hidden w-2/3 float-right ">
                    <div className="px-8 h-screen -mt-20 justify-center items-center flex gap-4 flex-col bg-norway400">
                        <NavigationLinks toggleMenu={toggleMenu} />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
