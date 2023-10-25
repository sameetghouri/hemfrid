const Cleaningtips=()=>{

    return (<div>

        <div className=" py-24 h-fit   bg-[#f5f4f0]">
        
        <div class="">
            <h3 className="text-5xl font-medium ">Cleaning tips & news</h3>
            
         {/* line content */}
         <div className="w-full  flex  justify-center mt-8">
         
            <p className=" border-black border-b w-20 text-center " ></p>
         
         </div>
        
        
            </div>
        
         {/* Box contetnt */}
        
         <div className="   mt-14  mx-24  h-fit   flex  overflow-hidden pb-24  ">
        {/* column one */}
        <div className="flex flex-col justify-between items-start mr-7">
        
        {/* first item */}
        
        <div  className="h-[100vh] bg-[#fff] w-fit "> {/* main box */}
            {/* image box */}
        <div>
        <img src="https://images.ctfassets.net/37vwfxlcawdb/6YcKFsdnCvokGoU3cbS2A8/83c7397a8fc81d02560bd72fd7877536/MicrosoftTeams-image__6_.png?q=50&fm=jpg&w=800" className="h-80" alt="Pic" />
        </div>
        
        {/* Content  box */}
        <div className="flex items-center justify-center flex-col  h-56">
        
          <p className="text-xl font-bold mt-5">CLEANING</p>
        
        
            <p className=" border-black border-b w-20 text-center mt-4" ></p>
            <p className="text-3xl font-medium mt-2">Wash windows with </p>
                <p  className="text-3xl font-medium mt-2"> homemade window   </p>
            <p  className="text-3xl font-medium mt-2" >Cleaner</p>
        </div>
        
        
        </div>
        
        <div  className="h-[90vh] bg-[#fff] w-fit relative top-14"> {/* main box */}
            {/* image box */}
        <div>
        <img src="https://images.ctfassets.net/37vwfxlcawdb/3pdyQZ0ZaS1ZUT70f70fvC/64ed9ea5b7ce17d1665adaa157273971/Stadprodukter-produktion-fabrik.jpg?q=50&fm=jpg&w=800" className="w-[700px] h-80" alt="Pic" />
        </div>
        
        {/* Content  box */}
        
        
        
        <div className="flex items-center justify-center flex-col  h-52">
        
            <p className="text-xl font-bold">CLEANING</p>
          
          
              <p className=" border-black border-b w-20 text-center mt-4" ></p>
              <p className="text-3xl font-medium mt-2">Hemfrid's own cleaning </p>
              <p  className="text-3xl font-medium mt-2" >Products</p>
          </div>
        
        
        
        
        
        </div>
        
        
        
        </div>
        
        {/* column two */}
        
        <div className="flex flex-col justify-between items-start ">
        
            {/* first item */}
            
            <div  className="h-[60vh] mx-16   w-fit "> {/* main box */}
                {/* image box */}
            <div className="">
            <svg viewBox="0 0 280 325" class="cfbIs2Ub ahI90hC" style={{fill:"#d1dce7"}} ><path d="M140 0L280 85.0667V242.918L140 324.8L0 242.918L2.77158e-05 82.4067L140 0Z"></path></svg>
            </div>
            
            {/* Content  box */}
            <div className="flex items-center justify-center flex-col bg-transparent relative bottom-80 p-20 h-64">
        
                <p className="text-xl font-bold">CLEANING</p>
              
              
                  <p className=" border-black border-b w-20 text-center " ></p>
                  <p className="text-3xl  mt-2">Cleaning with  </p>
                  <p  className="text-3xl  mt-2" >bicarbonate </p>

              </div>
            
            </div>
            
            <div  className="h-[90vh] bg-[#fff] w-fit relative bottom-20"> {/* main box */}
                {/* image box */}
            <div>
            <img src="https://images.ctfassets.net/37vwfxlcawdb/46QuR2Gk0kJykMplBbOMlZ/612aa580ed59e506dd5ab0347b3dcbec/Golv-matta-16-9.jpg?q=50&fm=jpg&w=800" className="h-80 w-[700px]" alt="Pic" />
            </div>
            
            {/* Content  box */}
            <div className="flex items-center justify-center flex-col   h-52">
        
                <p className="text-xl font-bold">LAUDRY.MOVING </p>
              
              
                  <p className=" border-black border-b w-20 text-center mt-4" ></p>
                  <p className="text-3xl font-medium mt-2">Wash rugs at home -7 </p>
                  <p  className="text-3xl font-medium mt-2" >tips</p>
                 
              </div>
            
            
            </div>
            
            
            
            </div>
        
            </div>
        
            
        {/* Button */}
        
        <button className="px-5 py-3 text-lg font-semibold rounded-lg overflow-hidden relative group cursor-pointer bg-[#044946]  hover:scale-105 duration-[700ms]">
                <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-[#1fa299] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-[700ms] group-hover:text-white ease">
                    MORE TIPS
                </span>
            </button>

            
            </div>
        
        </div>);
        

}

export default Cleaningtips;