import React from "react";
import NavFront from "@/Components/NavFront";
import { Head } from "@inertiajs/inertia-react";
import './../../css/contact.css'
import contacts from './contact.json'
import FootFront from "@/Components/FootFront";
import img from './../assets/img/bg__contact.jpg'

const Contact = (props) => {


    console.log(contacts)
    return (
        <>
            <Head title="Contact us" />
            <div>
                {/* Header */}
                <div className='contact__img__silico flex justify-center items-center h-screen pt-16 bg-fixed'>
                    <NavFront user={props.auth.user} />
                </div>
                <div className="container mx-auto">
                    <div className="contact__grid__container p-12 px-12 gap-12" >
                        <div className="text-lg">
                            <div className="p-2">
                                <div>
                                    <label htmlFor=''>Please tell us about yourself <sup>*</sup></label>
                                </div>
                                <div>
                                    <select className="border-r-transparent border-l-transparent border-t-transparent w-full border-b-black">
                                        <option>I am a distributor</option>
                                        <option>I am a direct client</option>
                                        <option>I am an end user</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="p-2 pt-3">
                                <div>
                                    <label htmlFor='' className=" ">Compagny <sup className="text-red-500">*</sup></label>
                                </div>
                                <div>
                                    <input id="compagny" type='text' placeholder="..." name="compagny" className="capitalize border-r-transparent border-l-transparent border-t-transparent w-full border-b-black" />
                                </div>
                            </div>
                            <div className="p-2 pt-3">
                                <div>
                                    <label htmlFor='' className="">Last Name <sup className="text-red-500">*</sup></label>
                                </div>
                                <div>
                                    <input type='text' placeholder="..." name="lastname" className="capitalize border-r-transparent border-l-transparent border-t-transparent w-full border-b-black" />
                                </div>
                            </div>
                            <div className="p-2 pt-3">
                                <div>
                                    <label htmlFor='' className="">First Name <sup className="text-red-500">*</sup></label>
                                </div>
                                <div>
                                    <input type='text' placeholder="..." name="firstname" className="uppercase border-r-transparent border-l-transparent border-t-transparent w-full border-b-black" />
                                </div>
                            </div>
                            <div className="p-2 pt-3">
                                <div>
                                    <label htmlFor=''>Email <sup className="text-red-500">*</sup></label>
                                </div>
                                <div>
                                    <input type='text' placeholder="..." name="email" className="border-r-transparent lowercase border-l-transparent border-t-transparent w-full border-b-black" />
                                </div>
                            </div>
                            <div className="p-2 pr-6 pt-3 contact__grid__phone gap-4">
                                <div className="">
                                    <div>
                                        <label htmlFor=''>Code <sup className="text-red-500">*</sup></label>
                                    </div>
                                    <div>
                                        <select className="border-r-transparent border-l-transparent border-t-transparent w-full border-b-black">
                                            {
                                                contacts.map((contact, index) => (
                                                    <option key={index}>{`${contact.code} ${contact.dial_code}`}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="">
                                    <div>
                                        <label htmlFor=''>Phone <sup className="text-red-500">*</sup></label>
                                    </div>
                                    <div>
                                        <input type='text' placeholder="..." name="phone" className="border-r-transparent capitalize border-l-transparent border-t-transparent w-full border-b-black" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 pt-3">
                                <div>
                                    <label htmlFor=''>Address <sup className="text-red-500">*</sup></label>
                                </div>
                                <div>
                                    <input type='text' placeholder="..." name="adress" className="border-r-transparent capitalize border-l-transparent border-t-transparent w-full border-b-black" />
                                </div>
                            </div>
                            <div className="p-2 pt-3">
                                <div>
                                    <label htmlFor=''>Message <sup className="text-red-500">*</sup></label>
                                </div>
                                <div>
                                    <textarea placeholder="..." name="adress" className="border-r-transparent capitalize border-l-transparent border-t-transparent w-full border-b-black">

                                    </textarea>
                                </div>
                            </div>
                            <div className="p-2 pt-3">
                                <div>
                                    <input type='checkbox' />
                                    <label htmlFor='' className="pl-2 mt-1">I want to receive Activn's news.</label>
                                </div>
                            </div>
                            <div className="p-2 pt-3">
                                <button type='submit' className="bg-slate-800 hover:bg-slate-500 transition-colors hover:transition-colors text-white p-2 text-base px-10">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <img src={img} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
            <FootFront />
        </>
     );
}

export default Contact ;
