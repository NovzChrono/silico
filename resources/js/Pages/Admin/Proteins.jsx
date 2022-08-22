import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import {BsPalette2} from 'react-icons/bs'
import { GiReturnArrow } from "react-icons/gi";

const Proteins = (props) => {
    const {
        peptide,
        family,
        molfunction,
        celcomponent,
        bioprocess,
        syntheticpep,
        phageexprpep,
        origin,
        keyword,
        target,
        structure3d,
        reference
    } = usePage().props
    return (
    <>
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Proteins" />
            <div className="container mx-auto pt-10">
                <div>
                    <Link href={route('dashboard')} className='text-xl inline-block underline text-orange-500'>
                        <GiReturnArrow className='inline-block mb-1' /><span className=''>back to dashboard</span>
                    </Link>
                </div>
                <div className=''>
                    <div>
                        <div className='flex text-3xl pt-10 border-b-2 pb-2 mb-12'>
                            <div className='pt-1 px-3'><BsPalette2 /></div>
                            <div>Proteins</div>
                        </div>
                        <div className="">
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full border text-center">
                                            <tbody>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="" className="block py-4 px-6">
                                                            01
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="" className="block py-4 px-6">
                                                            Number of available peptides
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="" className="block py-4 px-6">
                                                            {peptide}
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/families" className="block py-4 px-6">
                                                            02
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/families" className="block py-4 px-6">
                                                            NanoProtein Families
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="/families" className="block py-4 px-6">
                                                            {family}
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/molfunctions" className="block py-4 px-6">
                                                            03
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/molfunctions" className="block py-4 px-6">
                                                            Annotated Molecular Functions
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="/molfunctions" className="block py-4 px-6">
                                                            {molfunction}
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/celcomponents" className="block py-4 px-6">
                                                            04
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/celcomponents" className="block py-4 px-6">
                                                            Annotated Cellular Locations
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="/celcomponents" className="block py-4 px-6">
                                                            {celcomponent}
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/bioprocesses" className="block py-4 px-6">
                                                            05
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/bioprocesses" className="block py-4 px-6">
                                                            Annotaed Biological Processes
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="/bioprocesses" className="block py-4 px-6">
                                                            {bioprocess}
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/peptides" className="block py-4 px-6">
                                                            06
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/peptides" className="block py-4 px-6">
                                                            Syntetized Peptides
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="/peptides" className="block py-4 px-6">
                                                            {syntheticpep}
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/phagedisplay" className="block py-4 px-6">
                                                            07
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/phagedisplay" className="block py-4 px-6">
                                                            Peptides Expressed in Phage
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="/phagedisplay" className="block py-4 px-6">
                                                            {phageexprpep}
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="" className="block py-4 px-6">
                                                            08
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="" className="block py-4 px-6">
                                                            Confirmed Targets
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="" className="block py-4 px-6">
                                                            {target}
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/origins" className="block py-4 px-6">
                                                            09
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/origins" className="block py-4 px-6">
                                                            Organisms
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="/origins" className="block py-4 px-6">
                                                            {origin}
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/" className="block py-4 px-6">
                                                            10
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="" className="block py-4 px-6">
                                                            Annotated Keywords
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="" className="block py-4 px-6">
                                                            {keyword}
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/structure" className="block py-4 px-6">
                                                            11
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/structure" className="block py-4 px-6">
                                                            Peptide with 3D Structure
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="/structure" className="block py-4 px-6">
                                                            {structure3d}
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                    <td className="whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="/" className="block py-4 px-6">
                                                            12
                                                        </Link>
                                                    </td>
                                                    <td className="text-left whitespace-nowrap text-base font-medium border-r">
                                                        <Link href="" className="block py-4 px-6">
                                                            Pubmed References
                                                        </Link>
                                                    </td>
                                                    <td className="text-base font-light whitespace-nowrap border-r">
                                                        <Link href="" className="block py-4 px-6">
                                                            {reference}
                                                        </Link>
                                                    </td>
                                                </tr>

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

export default Proteins;
