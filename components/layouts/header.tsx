import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import {AiOutlineUser} from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";

export default function HeaderComponent() {

    return (
        <header className="header bg-white ">
            <div className="container flex justify-between items-center">

                <div className="menu-navbar flex items-center gap-[120px]">
                    <div className="logo">
                        <Image src="/assets/images/logo.png" alt="Commercio" width={100} height={30}></Image>
                    </div>
                    <div>
                        <ul className="flex gap-3 text-[#737373] text-sm">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/">Shop</Link>
                            </li>
                            <li>
                                <Link href="/">About</Link>
                            </li>
                            <li>
                                <Link href="/">Blog</Link>
                            </li>
                            <li>
                                <Link href="/">Contact</Link>
                            </li>
                            <li>
                                <Link href="/">Pages</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="user-navbar flex items-center gap-7 text-[#23A6F0] text-sm">
                    <div className="account-status flex gap-1 items-center">
                        <AiOutlineUser/>
                        <span >Login/Register</span>
                    </div>
                    <div className="search" >
                        <AiOutlineSearch aria-setsize={30}/>
                    </div>
                    <div className="cart flex items-center">
                        <AiOutlineShoppingCart/>
                        <span className="text-xs">1</span>
                    </div>
                    <div className="wishlist flex items-center">
                        <AiOutlineHeart/>
                        <span className="text-xs">1</span>
                    </div>
                </div>
            </div>
        </header>
    );

}

