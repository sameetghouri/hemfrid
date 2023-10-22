
import { Link } from "react-router-dom";
const Footer = () => {

    return (
        <footer className="bg-black pt-6 w-full flex flex-col items-center">

            <div
                id="footer"
                className="py-10 px-2 w-full max-w-6xl  grid lg:grid-cols-4 grid-cols-2 gap-4 text-white"
            >
                <div className="col-span-1 flex flex-col gap-5">
                    <h2 className="font-bold text-xl">Services</h2>

                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Everything for your home
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Everything for your move
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Everything for your yard
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Everything for your business
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                </div>
                <div className="  col-span-1 flex flex-col gap-5">
                    <h2 className="  font-bold text-xl">Where to find us</h2>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Stockholm
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Gothenburg
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Västerås
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Malmö
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Uppsala
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Linköping
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Norrköping
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Mälardalen
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                   
                </div>
                <div className="  col-span-1 flex flex-col gap-5">
                    <h2 className=" font-bold text-xl ">More information</h2>
                    <Link to="mailto:intellsignals.entertainment@gmail.com">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Hemfrid App for iPhone
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Hemfrid App for Android
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Hemfrid's cleaning products
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Tips & inspiration
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Life at Hemfrid
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            About RUT
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                               Sustainability
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Our story
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                </div>

                <div className="col-span-1 flex flex-col gap-5">
                    <h2 className="font-bold text-xl">About us</h2>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-[#8c8c8c] font-semibold relative z-10 group-hover:text-red-500">
                            Phone: 010-555 85 00
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            E-mail: info@hemfrid.se
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Partner
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Cleaning as salary benefit
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Careers
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Whistleblower
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Contact us
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            Media relations
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="relative inline-block group">
                            <span className="text-gr1 font-semibold relative z-10 group-hover:text-red-500">
                            FAQ’s
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-red-500 transform origin-left scale-x-0 transition-transform ease-out duration-300 group-hover:scale-x-100"></div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center w-full  pt-8  pb-3 bg-[#141617] gap-y-4 ">
                <div className="flex items-center gap-4">
                    <a href="https://web.whatsapp.com/">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition-all duration-700">
                            <img src="/img/wa.png" alt="home" className="w-5 h-5" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
                            <img src="/img/li.png" alt="home" className="w-5 h-5" />
                        </div>
                    </a>
                    <a href="mailto:abc@gmail.com">
                        <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
                            <img src="/img/gm.png" alt="home" className="w-5 h-5" />
                        </div>
                    </a>
                    <div className="bg-white p-2 rounded-full cursor-pointer hover:scale-125 transition duration-700">
                        <img src="/img/tp.png" alt="home" className="w-5 h-5" />
                    </div>
                </div>
                <div className="relative w-full">
                    <p className="text-white text-center">
                        @copyright2023 IntellSignals.com
                    </p>
                    <p
                        onclick={() => window.open("https://codezoone.netlify.app/")}
                        class="text-xs -mt-4 font-bold bg-white p-1 px-2 rounded-3xl relative md:absolute right-0 md:right-4 hover:cursor-pointer hover:font-bold text-center hover:bg-green-400 hover:text-white hover:scale-x-105 hover:duration-300"
                    >
                        <a href="https://codezoone.netlify.app/" target="_blank">
                            Developed By CodeZone
                        </a>
                    </p>
                </div>
            </div>
        </footer>
        
    );

}
export default Footer;