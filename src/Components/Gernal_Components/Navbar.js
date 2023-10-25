import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isHover, setisHover] = useState('');

    return (
        <>

            <nav className="w-screen bg-[#FFF] h-[75px] mt-[.3px] z-50  flex items-center px-5   justify-between fixed  ">
                <Link to='/' className="cursor-pointer ">
                    <p className="text-2xl lg:text-2xl xl:text-2xl "><img
                        src="https://www.hemfrid.se/_next/static/media/logo-horizontal.225a413c.svg" className="h-10" alt=""
                        srcset="" /></p>
                </Link>

                <ul
                    className="hidden lg:flex cursor-pointer mr-16   lg:text-lg lg:ml-3 xl:text-lg 2xl:text-xl    md:text-sm pr-9 relative">
                    <p
                        onMouseEnter={() => setisHover("Cleaning")}
                        onMouseLeave={() => setisHover("")}
                        className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r      before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700 ">

                        <li className="mx-4 w-fit xl:mx-4   2xl:mx-4"  >
                            Cleaning</li>

                    </p>
                    <p
                    onMouseEnter={() => setisHover("Moving")}
                    onMouseLeave={() => setisHover("")} 
                    className="inline-block relative  py-3 2xl:mx-4">
                        <li className="mx-4 xl:mx-4  2xl:mx-8 transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700">
                        Moving</li>
                    </p>
                    <p
                        className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700">
                        <li className="mx-4 xl:mx-4 2xl:mx-4 inline-block ">Gardening</li>
                    </p>


                    <p
                        className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700">
                        <li className="mx-2 xl:mx-3 2xl:mx-4 inline-block  ">More Services</li>
                    </p>

                    <p
                        className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700">
                        <li className="mx-2 xl:mx-3
                         2xl:mx-4 inline-block  ">More Bussiness</li>
                    </p>
                    <p
                        className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700">
                        <li className="mx-2 xl:mx-3 2xl:mx-4 inline-block  ">Our locations</li>
                    </p>

                    <p
                        className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700">
                        <li className="mx-2 ">About Hemrfied</li>
                    </p>


                </ul>
                {isHover && isHover === "Cleaning" && (
                    <div className='absolute w-full bg-gray-100 top-16 left-0 z-50 flex flex-col items-start transition-all duration-700'
                        onMouseEnter={() => setisHover("Cleaning")}
                        onMouseLeave={() => setisHover('')}
                    >
                        <div className='flex flex-col gap-y-10 px-24 py-8 '>
                            <Link className='text-2xl text-start'>Everything For Your Home</Link>
                            <ul className='grid grid-cols-2 gap-8'>
                                <Link to='/Home_clean' className='col-span-1 text-lg border-b-2 border-gr1 p-2'><li>Home Cleaning</li></Link>
                                <Link to='/Window_clean' className='col-span-1 text-lg border-b-2 border-gr1 p-2'><li>Window Cleaning</li></Link>
                                <Link to='/Deep_Clean' className='col-span-1 text-lg border-b-2 border-gr1 p-2'><li>Deep Cleaning</li></Link>
                                <Link to='/Moving_Home' className='col-span-1 text-lg border-b-2 border-gr1 p-2'><li>Move Out Cleaning</li></Link>

                            </ul>
                        </div>

                    </div>
                )}
                 {isHover && isHover ==="Moving" && (
                    <div className='absolute w-full bg-gray-100 top-16 left-0 z-50 flex flex-col items-start '
                        onMouseEnter={() => setisHover("Moving")}
                        onMouseLeave={() => setisHover('')}
                    >
                        <div className='flex flex-col gap-y-10 pl-64 py-8 '>
                            <Link className='text-2xl text-start'>Everything For Your Move</Link>
                            <ul className='grid grid-cols-2 gap-8'>
                                <Link to='/moving-service' className='col-span-1 text-lg border-b-2 border-gr1 p-2'><li>Moving Service</li></Link>
                                <Link to='/move-cleaning' className='col-span-1 text-lg border-b-2 border-gr1 p-2'><li>Move out Cleaning</li></Link>
                            </ul>
                        </div>

                    </div>
                )}


                <div className="lg:flex items-center mr-3   hidden  2xl:text-2xl">
                    <p className="cursor-pointer inline-block  mx-2">SV </p>

                    <div className="inline-block border-r border-zinc-400   h-12 mx-2"></div>

                    <p className="cursor-pointer  inline-block font-[700] border-opacity-[0.2] mx-2  ">EN</p>
                </div>

                <div class="lg:hidden text-5xl cursor-pointer mr-8">
                    <p href="#">&#8801;</p>
                </div>


            </nav>

        </>
    );


};


export default Navbar;