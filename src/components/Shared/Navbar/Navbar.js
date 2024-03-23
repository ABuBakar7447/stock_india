"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
    const [openSideNav, setOpenSideNav] = useState(false);

    return (
        <div
            className={`bg-[#1e375f] text-white lg:relative absolute h-screen duration-700 ${openSideNav ? "md:w-2/4  w-3/5" : "w-0"} `}
        >

            <div className="absolute -right-6 top-1/2 -translate-y-1/2">
                <button
                    onClick={() => setOpenSideNav(!openSideNav)}
                    className="bg-[#1e375f] hover:bg-blue-800 duration-700 text-white h-24"
                >
                    <IoMdArrowDroprightCircle
                        className={` rounded ${openSideNav ? "rotate-180 w-6 h-16 duration-700" : "rotate-0 w-6 h-16 duration-700"}`}
                    />
                </button>
            </div>

            <div className={`flex justify-around items-center min-h-[64px] duration-300 ${openSideNav ? "" : "hidden"}`}>

                <span className="flex items-center gap-2">
                    <RxAvatar className="w-8 h-8" />
                    Hello, <strong>User</strong>
                </span>

                <div className="relative w-7 h-8">
                    <FaBell className="w-6 h-6" />
                    <GoDotFill className="absolute top-0 right-0 text-red-600" />
                </div>

            </div>

            <hr />

            <div className={`${openSideNav ? "" : "hidden"} duration-500`}>
                <div className="*:w-full flex flex-col justify-around *:px-5 *:py-2 my-5 font-semibold  hover:*:bg-slate-900 *:duration-300">
                    <Link href={"/"} className="flex justify-start items-center gap-2">
                        <MdOutlineMessage className="w-6 h-6" />Discussion Forum
                    </Link>
                    <Link href={"/"} className="flex justify-start items-center gap-2">
                        <RiMoneyDollarCircleLine className="w-6 h-6" />Market Stories
                    </Link>
                    <Link href={"/"}>Sentiment</Link>
                    <Link href={"/"}>Markets</Link>
                    <Link href={"/"}>Sectors</Link>
                    <Link href={"/"}>Watchlist</Link>
                    <Link href={"/"}>Events</Link>
                    <Link href={"/"}>News / Interview</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
