
const Tipsinsp = () => {


    return (
        <div className=" py-28 h-fit   bg-[#f5f4f0] font-['Roboto']">

            <div class="">
                <h3 className="text-5xl font-medium ">Tips & inspiration?</h3>

                {/* line content */}
                <div className="w-full  flex justify-center mt-8">

                    <p className=" border-black border-b w-20 text-center hover:w-[250PX] hover:border-yellow-500  transition-all duration-300 transform origin-center scale-100" ></p>

                </div>


            </div>

            {/* Box contetnt */}

            <div className="   mt-14 mx-24  h-fit   flex  overflow-hidden pb-24  ">
                {/* column one */}
                <div className="flex flex-col justify-between items-start mr-7">

                    {/* first item */}

                    <div className="h-[90vh] bg-[#fff] w-fit "> {/* main box */}
                        {/* image box */}
                        <div>
                            <img src="https://images.ctfassets.net/37vwfxlcawdb/1TfE1UU6y8uJw1qSaSGma6/2ff488f042edf4fe6a7ce60a33c3abca/Startsida.jpg?q=50&fm=jpg&w=800" className="h-80" alt="Pic" />
                        </div>

                        {/* Content  box */}
                        <div className="flex items-center justify-center flex-col  h-52">

                            <p className="text-xl font-bold">GARDEN</p>


                            <p className=" border-black border-b w-20 text-center mt-4" ></p>
                            <p className="text-3xl font-medium mt-2">Get the patio ready for </p>
                            <p className="text-3xl font-medium mt-2" >Winter</p>
                        </div>


                    </div>

                    <div className="h-[90vh] bg-[#fff] w-fit relative bottom-4"> {/* main box */}
                        {/* image box */}
                        <div>
                            <img src="https://images.ctfassets.net/37vwfxlcawdb/7dW484PsUzeMp5NmQ4j9nE/e8cf4720dac926605d9333564ebe77c0/Hemst_d.jpg?q=50&fm=jpg&w=800" className="w-[700px] h-80" alt="Pic" />
                        </div>

                        {/* Content  box */}



                        <div className="flex items-center justify-center flex-col  h-52">

                            <p className="text-xl font-bold">CLEANING.ORGANIZATION</p>


                            <p className=" border-black border-b w-20 text-center mt-4" ></p>
                            <p className="text-3xl font-medium mt-2">More fluency in everyday</p>
                            <p className="text-3xl font-medium mt-2" >life-5 simple tips</p>
                        </div>





                    </div>



                </div>

                {/* column two */}

                <div className="flex flex-col justify-between items-start ">

                    {/* first item */}

                    <div className="h-[100vh]  bg-[#fff] w-fit "> {/* main box */}
                        {/* image box */}
                        <div>
                            <img src="https://images.ctfassets.net/37vwfxlcawdb/4l8RDAxaEze1utGrkmIWcl/fd7bd29adbf662cdd8182b695e1973d9/Sta_d-.jpg?q=50&fm=jpg&w=800" className="h-80 w-[700px]" alt="Pic" />
                        </div>

                        {/* Content  box */}
                        <div className="flex items-center justify-center flex-col   h-64">

                            <p className="text-xl font-bold">CLEANING</p>


                            <p className=" border-black border-b w-20 text-center mt-4" ></p>
                            <p className="text-3xl font-medium mt-2">Dansih hygge at home -</p>
                            <p className="text-3xl font-medium mt-2" >small details that make a</p>
                            <p className="text-3xl font-medium mt-2" >difference</p>
                        </div>

                    </div>

                    <div className="h-[90vh] bg-[#fff] w-fit relative top-10"> {/* main box */}
                        {/* image box */}
                        <div>
                            <img src="https://images.ctfassets.net/37vwfxlcawdb/newXRLyXsdeIk7VC7p51m/ae2038e11f57f83abc52e94a79c82daa/Kok-spis-narbild-16-9.jpg?q=50&fm=jpg&w=800" className="h-80 w-[700px]" alt="Pic" />
                        </div>

                        {/* Content  box */}
                        <div className="flex items-center justify-center flex-col   h-52">

                            <p className="text-xl font-bold">CLEANING</p>


                            <p className=" border-black border-b w-20 text-center mt-4" ></p>
                            <p className="text-3xl font-medium mt-2">Clean your oven quickly</p>
                            <p className="text-3xl font-medium mt-2" >and easily</p>

                        </div>


                    </div>



                </div>

            </div>

            <button className="px-5 py-3 text-lg font-semibold rounded-lg overflow-hidden relative group cursor-pointer bg-sk  hover:scale-105 duration-[700ms]">
                <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-green-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
                    MORE TIPS
                </span>
            </button>
        </div>
    );






}

export default Tipsinsp;