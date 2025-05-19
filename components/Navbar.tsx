'use client'
import React, { useState } from 'react'
import { ThemeToggle } from "./ui/ThemeToggle";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const listItems = [
        {
            name: "Home",
            link: "home"
        },{
            name: "Blog",
            link: "blog",
        },{
            name: "Snippets",
            link: "snippets"
        },{
            name: "Resources",
            link: "resources"
        },{
            name: "Resume",
            link: '#'
        }
    ];

    const onItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 ">
            <nav className="flex justify-between items-center max-w-4xl mx-auto py-3 px-4">
                <div className="p-2 rounded-full shadow-md dark:shadow-neutral-300">
                    <ThemeToggle />
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center items-center gap-4 shadow-lg dark:shadow-neutral-400 dark:shadow-md rounded-full px-4">
                    {listItems.map((item, idx) => (
                        <Link
                            key={`desktop-nav-link-${idx}`}
                            href={item.link}
                            onClick={onItemClick}
                            className='py-2 px-3 text-neutral-700 font-semibold hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors'
                        >
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 text-neutral-700 dark:text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </nav>
            
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 py-2 px-4 shadow-lg">
                    {listItems.map((item, idx) => (
                        <Link
                            key={`mobile-nav-link-${idx}`}
                            href={item.link}
                            onClick={onItemClick}
                            className='block py-3 text-neutral-700 font-semibold hover:text-black dark:text-neutral-200 dark:hover:text-white transition-colors border-b dark:border-gray-700'
                        >
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}