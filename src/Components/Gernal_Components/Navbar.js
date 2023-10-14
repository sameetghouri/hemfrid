

const Navbar=()=>{

    return (
        <>

<nav class="w-screen bg-[#eae8e1] h-[75px] mt-[.3px] z-10  flex   items-center px-5   justify-between fixed ">
<div className="cursor-pointer ">
   <p className="text-2xl lg:text-2xl xl:text-2xl">GrönFlytt & Städ</p> 
   
</div>

<ul className="lg:flex cursor-pointer lg:text-lg lg:ml-3 xl:text-sm 2xl:text-xl  hidden  md:text-sm pr-9">

<li className="mx-4  xl:mx-2  2xl:mx-8 hover:bg-blue  ">Cleaning</li>
<li className="mx-4 xl:mx-2   2xl:mx-8 ">Moving</li>
<li className="mx-4 xl:mx-2 2xl:mx-8 ">Gardening</li>
<li className="mx-4 xl:mx-2 2xl:mx-8  ">More Services</li>
<li className="mx-4 xl:mx-2  2xl:mx-8 ">For Bussiness</li>
<li className="mx-4 xl:mx-2 2xl:mx-8">Our locations</li>

<li className="mx-2   ">About Hemrfied</li>



</ul>

<div className="lg:flex items-center mr-3   hidden  2xl:text-2xl" >
    <p  className="cursor-pointer inline-block  mx-2">SV </p>

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