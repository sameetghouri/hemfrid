

const Navbar=()=>{

    return (
        <>

<nav class="w-screen bg-[#eae8e1] h-[75px] mt-[.3px] z-10  flex  items-center px-5  justify-between fixed ">
<div className="cursor-pointer ">
    <img src="https://www.hemfrid.se/_next/static/media/logo-horizontal.225a413c.svg"  className="h-8"  alt="" srcset=""/>
</div>

<ul className="md:flex cursor-pointer text-base hidden  pr-9">

<li className="mx-4 hover:bg-blue  ">Cleaning</li>
<li className="mx-4">Moving</li>
<li className="mx-4">Gardening</li>
<li className="mx-4">More Services</li>
<li className="mx-4">For Bussiness</li>
<li className="mx-4">Our locations</li>

<li className="mx-2   ">About Hemrfied</li>



</ul>

<div className="md:flex items-center mr-3   hidden  " >
    <p  className="cursor-pointer inline-block  mx-2">SV </p>

    <div className="inline-block border-r border-zinc-400   h-12 mx-2"></div>
        
        <p className="cursor-pointer  inline-block font-[700] border-opacity-[0.2] mx-2  ">EN</p>
</div>
 
<div class="md:hidden text-4xl cursor-pointer">
    <p href="#">&#8801;</p>
</div>


</nav>

        </>
    );


};


export default Navbar;