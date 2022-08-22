import React,{useState} from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import { GiReturnArrow } from "react-icons/gi";
import { BsPinMapFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

const Origins = (props) => {
    const {data} = usePage().props;
    const [input, setInput] = useState('');

    return (
    <>
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Origins" />

            <div className='container mx-auto pt-10'>
                <div>
                    <Link href={route('dashboard')} className='text-xl inline-block underline text-orange-500'>
                        <GiReturnArrow className='inline-block mb-1' /><span className=''>back to dashboard</span>
                    </Link>
                    <div className='relative flex justify-end px-12 md:px-0'>
                        <input
                            type='text'
                            placeholder='Search Origin...'
                            className='border-0 w-full md:w-72 focus:border-0 bg-slate-300 focus:outline-0 '
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <BiSearchAlt className='absolute top-3 right-14 md:right-2  text-xl text-indigo-700' />
                    </div>
                </div>
                <div className=''>
                    <div className="container mx-auto">
                        <div className='flex text-3xl pt-10 border-b-2 pb-2 mb-12'>
                            <div className='pt-1 px-3'><BsPinMapFill /></div>
                            <div>Origins</div>
                        </div>
                        <div className="">
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full border text-center">
                                            <thead>
                                                <tr className="border-b ">
                                                    <td className="text-base py-4 px-6 font-extrabold whitespace-nowrap border-r">
                                                        N°
                                                    </td>
                                                    <td className="text-base py-4 px-6 font-extrabold whitespace-nowrap border-r">
                                                        Origin
                                                    </td>
                                                    <td className="text-base py-4 px-6 font-extrabold whitespace-nowrap border-r">
                                                        Number of peptide
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.filter((data)=>data.nameOrigin.toLowerCase().includes(input)).map((origin, index) => (
                                                        <tr key={index} className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                            <td className="text-base font-light whitespace-nowrap border-r">
                                                                <Link href="" className="block py-4 px-6">
                                                                    {index+1}
                                                                </Link>
                                                            </td>
                                                            <td className="text-base text-left font-light whitespace-nowrap border-r">
                                                                <Link href="" className="block py-4 px-6">
                                                                    {origin.nameOrigin}
                                                                </Link>
                                                            </td>
                                                            <td className="text-base font-light whitespace-nowrap border-r">
                                                                <Link href="" className="block py-4 px-6">
                                                                    {origin.countPeptide}
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    </>
    );
}

export default Origins;
