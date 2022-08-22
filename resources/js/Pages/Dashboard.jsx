import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {GrPersonalComputer} from 'react-icons/gr';
import {GiProcessor, GiReturnArrow, GiTicket} from 'react-icons/gi';
import {FaBoxes} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import {VscReferences} from 'react-icons/vsc'
import {BsPalette2, BsFillXDiamondFill, BsFillPuzzleFill, BsPuzzle, BsFillPeopleFill, BsPinMapFill, BsKey} from 'react-icons/bs'
import { Head, Link } from '@inertiajs/inertia-react';
import './../../css/dashboard.css'

const elements = [{
    logo : <BsPalette2 />,
    title : 'Proteins',
    description : 'The SilicosDB contains active nanoproteins used for drug discovery. The database contains natural peptides as well as synthetic ones.',
    link : '/proteins',
    linkName : 'Proteins'
},
{
    logo : <BsFillXDiamondFill />,
    title : 'Synthetic Peptides',
    description : 'View details on synthesis realized for some preptides from the database.',
    link : '/peptides',
    linkName : 'SyntheticPep'
},
{
    logo : <GiProcessor />,
    title : 'Phage Display',
    description : 'View data related to expression of some peptides using the phage Display Technology.',
    link : '/phagedisplay',
    linkName : 'PhageDisplay'
},
{
    logo : <BsFillPuzzleFill />,
    title : 'Molecular Functions',
    description : 'Molecular function is assigned from Gene Ontology annotation and is a first hint when searching for a candidate.',
    link : '/molfunctions',
    linkName : 'MolFunctions'
},{
    logo : <GiTicket />,
    title : 'Cellular Components',
    description : 'Cellular localisation is assigned from Gene Ontology annotation and is a first hint when searching for a candidate.',
    link : '/celcomponents',
    linkName : 'CelComponents'
},{
    logo : <BsPuzzle />,
    title : 'Biological Processes',
    description : 'Biological processes refer to pathways and biological activities the peptide is involved in. Data issued from Gene Ontology annotation.',
    link : '/bioprocesses',
    linkName : 'BioProcesses'
},{
    logo : <BsFillPeopleFill />,
    title : 'Families',
    description : 'Peptides are organized by family, providing a better insight in their putative function.',
    link : '/families',
    linkName : 'Families'
},{
    logo : <BsPinMapFill />,
    title : 'Origins',
    description : 'Sequences are originated from hundred of origins. Searching by origin can allow to speed up the discovery process.',
    link : '/origins',
    linkName : 'Origins'
},{
    logo : <FaBoxes />,
    title : '3D Structure',
    description : 'Peptide Structure is a key element to check function and possible interaction with target.',
    link : '/structure',
    linkName : 'Structure'
},{
    logo : <BsKey />,
    title : 'KeyWords',
    description : '',
    link : '/keywords',
    linkName : 'Keywords'
},{
    logo : <VscReferences />,
    title : 'References',
    description : 'View details on reference realized for some preptides from the database.    ',
    link : '/references',
    linkName : 'References'
},]

export default function Dashboard(props) {
    const [input, setInput] = useState('');
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className='pt-6'>
                <div className='md:container mx-auto'>
                    <div className='md:flex justify-between py-3 mb-7'>
                        <div className='pb-3 pl-3 md:p-0'>
                            <Link href={route('home')} className='text-xl italic inline-block underline text-orange-500'>
                                <GiReturnArrow className='inline-block mb-1' /><span className=''>go to home</span>
                            </Link>
                        </div>
                        <div className='relative flex justify-end px-12 md:px-0'>
                            <input
                                type='text'
                                placeholder='Search Sequence...'
                                className='border-0 w-full md:w-72 focus:border-0 bg-slate-300 focus:outline-0 '
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <BiSearchAlt className='absolute top-3 right-14 md:right-2  text-xl text-indigo-700' />
                        </div>
                    </div>
                    <div>
                        <div className='flex text-3xl border-b-2 pb-2 mb-12'>
                            <div className='pt-1 px-3'><GrPersonalComputer /></div>
                            <div>SilicosDB DashBoard</div>
                        </div>
                        <div className='md:grid grid-cols-3 gap-8'>
                            {
                                elements.filter((elements)=>elements.title.toLowerCase().includes(input)).map((item, index) => (
                                    <div key={index} className='p-3 mb-2 md:mb-0 pt-4 border-2 border-white md:hover:border-2 md:hover:border-purple-400 bg-slate-200 mx-2 md:mx-0 md:bg-white md:hover:bg-slate-100'>
                                        <Link href={item.link} className=''>
                                            <div className='flex text-3xl mb-2'>
                                                <div className='px-2'>{item.logo}</div>
                                                <div>{item.title}</div>
                                            </div>
                                            <div className='md:pl-3 lg:h-28 text-lg dashboard__description'>
                                                {item.description}
                                            </div>
                                            <div className='py-4 md:pl-3'>
                                                <Link href={item.link} className='p-2 bg-purple-600 rounded-md text-white hover:bg-slate-700'>
                                                    Browse {item.linkName}
                                                </Link>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
