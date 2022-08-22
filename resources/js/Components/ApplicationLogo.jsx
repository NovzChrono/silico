import React from 'react';
import logo from './../assets/img/logo.png'

export default function ApplicationLogo({ className }) {
    return (
        <>
            <img src={logo} alt='logo' className=' w-48' />
        </>
    );
}
