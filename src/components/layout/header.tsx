"use client";

import { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <header className="bg-white text-black">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <div className="flex lg:gap-12   items-center">
                        <p className="font-bold text-4xl m-0 flex items-center">
                            stat<span className="text-[#C50000]">io</span>
                        </p>
                        <div className="md:block hidden">
                            <nav className="flex space-x-4">
                                {[
                                    ['Chương trình học', '/chuongtrinhhoc'],
                                    ['Giảng viên', '/giangvien'],
                                    ['Học phí', '/hocphi'],
                                    ['Ưu đãi', '/uudai'],
                                ].map(([title, url]) => (
                                    <a
                                        key={url}
                                        href={url}
                                        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                                    >
                                        {title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                    <a
                        href="#pick-class"
                        className="bg-[#C60001] text-white px-7 py-3 rounded-full md:block hidden"
                    >
                        Đăng ký ngay
                    </a>
                    <button
                        type="button"
                        className="text-3xl md:hidden block"
                        aria-controls="menu"
                        onClick={toggleMenu}
                    >
                        <IoMenuOutline />
                    </button>
                </div>
                {menuOpen && (
                    <nav className="flex flex-col sm:flex-row sm:justify-center space-y-2 mt-2">
                        {[
                            ['Chương trình học', '/chuongtrinhhoc'],
                            ['Giảng viên', '/giangvien'],
                            ['Học phí', '/hocphi'],
                            ['Ưu đãi', '/uudai'],
                        ].map(([title, url]) => (
                            <a
                                key={url}
                                href={url}
                                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                            >
                                {title}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
