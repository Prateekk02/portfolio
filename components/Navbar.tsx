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
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/25 dark:bg-gray-900/20 backdrop-blur-xl border-b border-white/10 dark:border-gray-800/30 mt-6">
            <nav className="flex justify-between items-center max-w-5xl mx-auto py-3 px-4">
                <div className="px-2 py-1 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg shadow-md dark:shadow-blue-950/30 border border-white/20 dark:border-gray-700/20">
                    <ThemeToggle />
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center items-center gap-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg shadow-lg dark:shadow-blue-950/30 rounded-full px-4 border border-white/20 dark:border-gray-700/20">
                    {listItems.map((item, idx) => (
                        <Link
                            key={`desktop-nav-link-${idx}`}
                            href={item.link}
                            onClick={onItemClick}
                            className='py-2 px-3 text-neutral-700 font-semibold text-md hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors relative group'
                        >
                            <span>{item.name}</span>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-black/20 to-transparent dark:via-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        </Link>
                    ))}
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 text-neutral-700 dark:text-white focus:outline-none bg-white/30 dark:bg-gray-800/30 rounded-full backdrop-blur-lg border border-white/20 dark:border-gray-700/20"
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
                <div className="md:hidden bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl py-2 px-4 shadow-lg border-t border-white/10 dark:border-gray-700/20">
                    {listItems.map((item, idx) => (
                        <Link
                            key={`mobile-nav-link-${idx}`}
                            href={item.link}
                            onClick={onItemClick}
                            className='block py-3 text-neutral-700 font-semibold hover:text-black dark:text-neutral-200 dark:hover:text-white transition-colors border-b dark:border-gray-700/20'
                        >
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}