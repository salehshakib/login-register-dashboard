import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../../../assets/images/icons/letter-r.png";

const Header = () => {
    const [toggle, setToggle] = useState(true);

    const toggleBtn = () => {
        setToggle(!toggle);
    };
    const user = {
        // uid: "user",
    };


    return (
        <nav className="relative z-10">
            <div className="w-full mx-auto fixed top-0 left-0 right-0 bg-white shadow-xl mb-5">
                <div className="navbar max-w-screen-xl mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown md:hidden block">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 text-neutral"
                            >
                                <li>
                                    <Link
                                        to="/dashboard"
                                        className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                                    >
                                        Dashboard
                                    </Link>

                                </li>

                                {user?.uid ? (
                                    <>


                                        <li>
                                            <Link
                                                to={"/"}
                                                className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link
                                                to="/login"
                                                className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/register"
                                                className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <div className="flex items-center">
                            <Link
                                to="/"
                                className="btn btn-ghost normal-case text-4xl bg-gradient-to-r from-[#2564eb]  to-[#07b4d5]  px-1 text-transparent bg-clip-text"
                            >
                                <span className="text-xl md:text-3xl">Saleh Shakib</span>

                            </Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 gap-3">
                            <li>
                                <Link
                                    to="/dashboard"
                                    className="px-2 hover:text-white hover:bg-[#1e3a8a] text-base md:text-xl p-2"
                                >
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex mr-5">

                            {user?.uid ? (
                                <>
                                    <Link
                                        to="/"
                                        className="px-2 bg-[#1e3a8a] hover:bg-[#152863] font-medium p-2 rounded flex text-white"
                                    >
                                        Logout
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                            />
                                        </svg>
                                    </Link>
                                    <span className=" ml-3 text-lg font-bold">
                                        {user?.displayName ? user.displayName : user.email}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="px-2 hover:text-white hover:bg-[#1e3a8a] font-medium p-2 mr-2 rounded"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="px-2 text-white bg-[#1e3a8a] hover:bg-[#152863] font-medium p-2 rounded"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                        {user?.uid ? (
                            <div
                                className="tooltip hover:tooltip-open tooltip-bottom "
                                data-tip={user?.displayName ? user.displayName : user.email}
                            >
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="User" />
                                    </div>
                                </label>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
