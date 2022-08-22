import React, {useEffect, useRef, useState} from 'react';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import axios from 'axios';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import NavFront from '@/Components/NavFront';
import GoogleMapReact from 'google-map-react';
import logo1 from './../assets/img/logo1.png';
import {TbWorld} from 'react-icons/tb';
import {IoIosCall} from 'react-icons/io';
import {AiOutlineMail} from 'react-icons/ai';
import {BiLinkExternal} from 'react-icons/bi';
import aboutIcon from './../assets/img/logoActiv.png';
import logo from "./../assets/img/logo2.png"
import './../../css/welcome.css'
import FootFront from '@/Components/FootFront';

const AnyReactComponent = ({ text }) => <img src={text} alt='logo' className=' w-12 p-1 rounded-xl' />;
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Welcome(props) {
    const TitreRef = useRef()

    const defaultProps = {
        center: {
          lat: 46.51937924470935,
          lng: 6.6318122110795334
        },
        zoom: 11
    };
    const [search, setSearch] = useState([])
    const {peptides} = usePage().props;

    const Chargement = () => {
        gsap.timeline()
            .fromTo(".lettre",
            {
                x:-100,
                opacity:0
            },
            {
                x:0,
                opacity:1,
                stagger:0.3,
                delay:0.3
            }
        )
    }
    const Left = (element, delaie, dure) => {
        gsap.fromTo(
            element,{
                opacity : 0,
                x: -200
            },
            {
                opacity : 1,
                x: 0,
                delay: delaie || "0.7",
                duration: dure || "0.7",
                scrollTrigger:{
                    trigger: element,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }
    const Right = (element, delaie, dure) => {
        gsap.fromTo(
            element,{
                opacity : 0,
                x: 0
            },
            {
                opacity : 1,
                x: 0,
                delay: delaie || "0.7",
                duration: dure || "0.5",
                scrollTrigger:{
                    trigger: element,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }
    useEffect(() => {
        Chargement()
    }, []);
    useEffect(() => {
        axios.get('/a').then(res => {
            setSearch(res.data);

        })
    }, [])
    useEffect(() => {
        Left('#about__img');
    }, [])
    useEffect(() => {
        Right('#about__content')
    }, [])
    useEffect(() => {
        Right('#about__miniproteins')
    }, [])

    return (
        <>
            <Head title="Welcome" />
            <div>
                {/* Header */}
                <div className='welcome__img__silico flex justify-center items-center h-screen pt-16 container__h bg-fixed'>
                    <NavFront user={props.auth.user} />
                    <div id="titre"  ref={TitreRef} className='flex justify-center items-center container__silico text-white text-5xl md:text-7xl'>
                        <span className="lettre px-2">S</span>
                        <span className="lettre px-2">i</span>
                        <span className="lettre px-2">l</span>
                        <span className="lettre px-2">i</span>
                        <span className="lettre px-2">c</span>
                        <span className="lettre px-2">o</span>
                        <span className="lettre px-2">D</span>
                        <span className="lettre px-2">B</span>
                        <span className="lettre particule"></span>
                    </div>
                </div>

                {/* About us  */}
                <div className='container__about md:container mx-auto py-24 bg-white bg-fixed'>
                    <div className='md:grid about'>
                        <div id='about__img' className='flex justify-center items-center'>
                            <img src={aboutIcon} className='w-72 md:w-96' />
                        </div>
                        <div id='about__content' className='text-xl text-justify md:text-left px-4 md:pr-10 md:pl-0 text-cyan-900'>
                            <div className='text-3xl font-extrabold text-center md:text-left  about__name pb-5'>ABOUT US</div>
                            <p className='py-2'>
                                Activen is a biotech company that has pioneered a new class of actives for the dermo-cosmetic industry.
                            </p>
                            <p className='py-2'>
                                Activen scouts the genomic sequences of living organisms to find promising actives. Our research has helped us identify an untapped source of natural molecules that are particularly well suited for dermo-cosmetic applications: miniproteins™.
                            </p>
                            <p className='py-2'>
                                Miniproteins™ are proteins that are small enough to penetrate the skin and offer high and specific efficacy on a given target. They are highly potent and safe, which makes them ideal candidates to become the new generation of active ingredients.
                            </p>
                            <p className='py-2'>
                                Activen is a pioneer in this field and has developed a unique database of more than 100'000 miniproteins™ to date. With less than 1% of these miniproteins™ having known functions, a multitude of powerful and innovative applications have yet to be discovered.
                            </p>
                            <p className='py-2'>
                                Activen has two active ingredients on the cosmetic ingredient market and R&D programs in the fields of anti-aging and regenerative dermatology, neuro-dermatology, and immuno-dermatology.
                            </p>
                        </div>
                    </div>
                </div>

                {/* a bout */}
                <div className='container__localisation md:h-screen md:grid grid-cols-2 items-center bg-slate-600 bg-fixed'>
                    <div className='p-8 md:p-24 md:pr-8 md:pl-40'>
                        <div id='about__miniproteins' className='bg-slate-900 bg-opacity-90 p-4 md:p-12 text-center text-lg text-white'>
                            <p>
                                Miniproteins™ are natural molecules that can be chemically synthesised or bioproduced according to the highest quality standards. We deliver miniproteins™ active ingredients with a constant level of purity and full traceability thanks to a simple supply chain avoiding extraction processes, high volume logistics and reliance on feedstocks.
                            </p>
                            <p className='pt-5'>
                                Importantly, we do not extract from nature. Thanks to the high potency of our actives, we can minimize the quantity produced, thus our ecological footprint.
                            </p>
                        </div>
                    </div>
                </div>

                {/* contact us & localisation */}
                <div className='md:h-screen'>
                    <div className='md:grid grid-cols-2 mx-2 gap-4 py-12 md:container md:mx-auto'>
                        <div className='space-y-4 mb-4 md:mb-0'>
                            <div className='bg-slate-100 style__card border p-3 hover:bg-slate-300'>
                                <div className='flex text-lg p-2'>
                                    <div className='pt-1 pr-2'><TbWorld /></div>
                                    <div><a className='text-base text-red-500 hover:underline hover:text-red-300' href='http://www.activen-cosmetics.ch'>http://www.activen-cosmetics.ch</a></div>
                                </div>
                                <div className='flex text-lg p-2'>
                                    <div className='pt-1 pr-2'><IoIosCall /></div>
                                    <div><a className='text-base '>+41 21 311 03 76</a></div>
                                </div>
                                <div className='flex text-lg p-2'>
                                    <div className='pt-1 pr-2'><AiOutlineMail /></div>
                                    <div><a className='text-base text-red-500 hover:underline hover:text-red-300' href='mailto:info@activen-cosmetics.ch'>info@activen-cosmetics.ch</a></div>
                                </div>
                            </div>
                            <div className='bg-slate-100 style__card border p-3 hover:bg-slate-300'>
                                <div className='flex justify-center'>
                                    <img src={logo} className=' w-2/6 md:w-1/4' alt='logo' />
                                </div>
                            </div>
                            <div className='bg-slate-100 style__card border p-3 hover:bg-slate-300'>
                                <div className='pb-1 text-base font-extrabold'>Facts & figures</div>
                                <div className='flex justify-between border-b-2 p-2 pb-3'>
                                    <div>Type of organization</div>
                                    <div>Private company</div>
                                </div>
                                <div className='flex justify-between p-2 pt-3'>
                                    <div>Year of foundation</div>
                                    <div>2010</div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className=' space-y-4'>
                                <div className='bg-slate-100 style__card border p-3'>
                                    <h1 className='pb-1 text-base font-extrabold'>Location</h1>
                                    <div className='flex justify-center'>
                                        <div style={{ height: '60vh', width: '100%' }} className=''>
                                            <GoogleMapReact

                                                bootstrapURLKeys={{ key: "" }}
                                                defaultCenter={defaultProps.center}
                                                defaultZoom={defaultProps.zoom}
                                            >
                                                <AnyReactComponent
                                                lat= {46.51937924470935}
                                                lng= {6.6318122110795334}
                                                text={logo1}
                                                />
                                            </GoogleMapReact>
                                        </div>
                                    </div>
                                    <div className='text-center pt-4 font-bold'>Rue du Petit-Chêne 12, 1003 Lausanne, Switzerland</div>
                                </div>
                                <div className='bg-slate-100 style__card border'>
                                    <Link className='p-5 block hover:bg-slate-300' href={route('contact')}  >
                                        <div className='flex justify-center'>
                                            Contact us
                                            <BiLinkExternal className='inline mx-2 mt-1' />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <pre>{ JSON.stringify(search, null, 4)} </pre> */}
                </div>

            </div>
            <FootFront />
        </>
    );
}
