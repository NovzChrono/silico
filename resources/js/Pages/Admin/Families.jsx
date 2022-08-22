import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import Pagination from "react-js-pagination";

const Families = (props) => {
    const {peptides} = usePage().props;
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }
    return (
    <>
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Families" />

            <div className='container mx-auto pt-10'>
                <div>
                    <Link href={route('dashboard')} className='text-xl inline-block underline text-orange-500'>
                        <GiReturnArrow className='inline-block mb-1' /><span className=''>back to dashboard</span>
                    </Link>
                </div>
                <div className=''>
                    <div className="container mx-auto">
                        <div className='flex text-3xl pt-10 border-b-2 pb-2 mb-12'>
                            <div className='pt-1 px-3'><BsFillPeopleFill /></div>
                            <div>Families</div>
                        </div>
                        <div className="">
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full border text-center">
                                            <tbody>
                                                {
                                                    peptides.map((peptide, index) => (
                                                        <tr key={index} className="border-b hover:bg-slate-200 md:hover:bg-gradient-to-r md:hover:from-cyan-500 md:hover:to-blue-500 md:hover:text-white cursor-pointer">
                                                            <td className="text-base font-light whitespace-nowrap border-r">
                                                                <Link href="" className="block py-4 px-6">
                                                                    {peptide[0]}
                                                                </Link>
                                                            </td>

                                                            <td className="text-base font-light whitespace-nowrap border-r">
                                                                <Link href="" className="block py-4 px-6">
                                                                    {peptide[1]}
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
                <div>
                    <Pagination
                    activePage={peptides}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                    />
                </div>
            </div>
        </Authenticated>
    </>
    );
}

export default Families;
