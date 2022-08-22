import React, {useState} from "react";
import { Link } from '@inertiajs/inertia-react';
import {HiMenuAlt2} from 'react-icons/hi';
import {MdClose} from 'react-icons/md'
import logo from './../assets/img/logoBlanc.png'


const NavFront = ({user}) => {
    const [scroll, setScroll] = useState(false);

    return (
        <>

            <div className="container__navfront top-0 z-20 absolute w-full dark:bg-gray-900  sm:pt-0">
                <div className="flex justify-between items-center md:container px-3 md:px-auto">
                {!scroll?
                    (<HiMenuAlt2 className='md:hidden block w-10 h-10 p-0 m-0 mr-2 text-white cursor-pointer' onClick={() => setScroll(!scroll)} />)
                    :(<MdClose className='md:hidden block w-10 h-10 p-0 m-0 mr-2 text-white cursor-pointer' onClick={() => setScroll(!scroll)} />)}
                    <div className="ml-2 md:ml-5 py-2">
                        <Link href='/'>
                        <img src={logo} alt='logo' className="w-16 md:w-20" />
                        </Link>
                    </div>
                    <div className={
                     (scroll ? "my-auto sm:block left-0 md:static  fixed  bottom-0 top-10 md:w-auto md:bg-transparent bg-black bg-opacity-90 w-full text-black md:flex items-center transition-left  text-2xl mt-10 pt-3"
                     : " sm:block -left-full md:static  fixed  bottom-0 top-10 md:w-auto md:bg-transparent bg-black bg-opacity-90 w-10/12 text-black md:flex items-center transition-left  text-2xl")
                    }>
                        {user ? (
                            <Link onClick={() => setScroll(!scroll)} href={route('dashboard')} className={`text-white items-center block md:flex link py-3 md:py-0 text-3xl md:text-xl px-3`}>
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link onClick={() => setScroll(!scroll)} href={route('login')} className={`text-white items-center block md:flex link py-3 md:py-0 text-3xl md:text-xl px-3`}>
                                    Log in
                                </Link>

                                <Link onClick={() => setScroll(!scroll)} href={route('register')} className={`text-white items-center block md:flex link py-3 md:py-0 text-3xl md:text-xl px-3`}>
                                    Register
                                </Link>
                            </>
                        )}
                        <Link href={route('contact')} className="text-white items-center block md:flex link py-3 md:py-0 text-3xl md:text-xl pl-3">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavFront;
