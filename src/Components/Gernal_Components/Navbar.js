const Navbar = () => {

    return (
        <>

            <nav class="w-screen bg-[#FFF] h-[75px] mt-[.3px] z-10  flex   items-center px-5   justify-between fixed  ">
                <div className="cursor-pointer ">
                    <p className="text-2xl  lg:text-2xl xl:text-2xl   "><img
                        src="https://www.hemfrid.se/_next/static/media/logo-horizontal.225a413c.svg" className="h-10" alt=""
                        srcset="" /></p>
                </div>

                <ul
                    className="lg:flex cursor-pointer mr-16   lg:text-lg lg:ml-3 xl:text-lg 2xl:text-xl  hidden  md:text-sm pr-9 relative">
                    <p
                        className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r      before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700 ">
                        <a href='/'>
                        <li className="mx-4 w-fit xl:mx-4   2xl:mx-4 ">
                            Cleaning</li>
                            </a>
                    </p>
                    <p className="inline-block relative  py-3 2xl:mx-4">
                        <li
                            className="mx-4 xl:mx-4   2xl:mx-8 transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700">
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
                        <li className="mx-2 xl:mx-3
 2xl:mx-4 inline-block  ">Our locations</li>
                    </p>

                    <p
                        className="inline-block relative  py-3  transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r     before:from-pink-700 before:via-pink-700 before:to-pink-700 hover:before:w-full hover:before:opacity-100 hover:text-pink-700">
                        <li className="mx-2   ">About Hemrfied</li>
                    </p>


                </ul>

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