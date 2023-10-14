const TNews=()=>{

return (<div>

<div className="  h-fit   bg-[#f5f4f0]">

<div class="">
    <h3 className="text-5xl font-medium pt-28">Cleaning tips & news</h3>
    
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

<div  className="h-[90vh] bg-[#fff] w-fit "> {/* main box */}
    {/* image box */}
<div>
<img src="https://images.ctfassets.net/37vwfxlcawdb/6lC1VncCjKuWEVVB9IvCfE/fd79f5f4a9a1060ad5892c496a62c48b/Tatjana-badrum-16-9.jpg?q=50&fm=jpg&w=800" className="h-80" alt="Pic" />
</div>

{/* Content  box */}
<div className="flex items-center justify-center flex-col  h-52">

  <p className="text-xl font-bold">CLEANING</p>


    <p className=" border-black border-b w-20 text-center mt-4" ></p>
    <p className="text-3xl font-medium mt-2">Cleaning with vingear -21  </p>
    <p  className="text-3xl font-medium mt-2" >effective tips</p>
</div>


</div>

<div  className="h-[90vh] bg-[#fff] w-fit relative top-14"> {/* main box */}
    {/* image box */}
<div>
<img src="https://images.ctfassets.net/37vwfxlcawdb/tdJ6X2UinI6KpFJcrmpIV/25e8a5955aef33b2d29959056164c965/Badkar-16-9.jpg?q=50&fm=jpg&w=800" className="w-[700px] h-80" alt="Pic" />
</div>

{/* Content  box */}



<div className="flex items-center justify-center flex-col  h-52">

    <p className="text-xl font-bold">CLEANING</p>
  
  
      <p className=" border-black border-b w-20 text-center mt-4" ></p>
      <p className="text-3xl font-medium mt-2">Avoid black mold in</p>
      <p  className="text-3xl font-medium mt-2" >bathroom</p>
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
    <div className="flex items-center justify-center flex-col bg-transparent relative bottom-80 p-4 h-64">

        <p className="text-xl font-bold">CLEANING</p>
      
      
          <p className=" border-black border-b w-20 text-center " ></p>
          <p className="text-3xl  mt-2">Dansih hygge at home -</p>
          <p  className="text-3xl  mt-2" >small details that make a</p>
          <p  className="text-3xl  mt-2" >difference</p>
      </div>
    
    </div>
    
    <div  className="h-[90vh] bg-[#fff] w-fit relative bottom-20"> {/* main box */}
        {/* image box */}
    <div>
    <img src="https://images.ctfassets.net/37vwfxlcawdb/3pdyQZ0ZaS1ZUT70f70fvC/64ed9ea5b7ce17d1665adaa157273971/Stadprodukter-produktion-fabrik.jpg?q=50&fm=jpg&w=800" className="h-80 w-[700px]" alt="Pic" />
    </div>
    
    {/* Content  box */}
    <div className="flex items-center justify-center flex-col   h-52">

        <p className="text-xl font-bold">CLEANING</p>
      
      
          <p className=" border-black border-b w-20 text-center mt-4" ></p>
          <p className="text-3xl font-medium mt-2">Hemfrid's own cleaning </p>
          <p  className="text-3xl font-medium mt-2" >products</p>
         
      </div>
    
    
    </div>
    
    
    
    </div>

    </div>

    
{/* Button */}

<div onClick className=" w-full flex items-center justify-center  pb-32  ">
<div className="text-xl font-bold   rounded-md cursor-pointer border-black border  bg-transparent p-4 w-44">MORE TIPS</div>

</div>







    
    </div>

</div>);

}

export default TNews;