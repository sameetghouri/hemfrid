import  { useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";

const AskedSection=()=>{
    const [activeIndex, setActiveIndex] = useState();
    const handleSetIndex = (index) => {
      setActiveIndex(index);
    };
    const faqs = [
        {
          question: "What is included in a home cleaning?",
          answer:
          "Here you can read more about which cleaning steps are included in a home cleaning. Our Eco-Friendly Cleaining Products are included for home cleaning subscribers and will be delivered to your home and refilled when needed. You can find more information in our service list for home cleaning."
        },
        {
          question: "How does timbanken work?",
          answer:
            "Timbanken makes it easy to adjust the subscription over time and makes it possible to pay a fixed monthly cost for your cleaning. For more information, call us at 010-555 85 00 or send an email to info@hemfrid.se."
        },
        {
          question: "Can I cancel or reschedule a cleaning session? ",
          answer:
            "In our Hemfrid app you can easily rebook or cancel your booking. You can also contact us on 010-555 85 00 or kundservice@hemfrid.se and we will help you. If you have cleaning every week, you can cancel up to five (5) cleaning sessions. If you have cleaning every other week, you are able to cancel three (3) cleaning sessions."
            
        },
        {
          question: " What happens if my Hemfridare is not available?",
          answer:
            " We strive for the same person to clean every time. But in the event of illness or a holiday, for example, we make sure that someone else from our cleaning team is at your service. Everyone in our cleaning team has the same training as your regular Hemfridare. They look at your cleaning instructions to know how you want it. Therefore, it is important that the instructions are up to date. Feel free to check your cleaning instructions in the app and update them if there is something you want to change or add."
        }
      ];
    return (<>
    <section id="faq">
      <div className="relative py-16 bg-gray-100 min-h-full lg:min-h-screen w-full flex flex-col items-center gap-8 ">
        <div>
          <div className="relative bg-gray-100 min-h-full lg:min-h-screen w-full flex flex-col items-center gap-8 ">
            <h2 className="font-bold text-5xl mb-3">
              FAQ about <span className="text-green-500">about house</span>{" "}
            </h2>
            {faqs.map(({ question, answer },i) => (
                 <div
                 className="bg-white rounded-lg  w-4/5 shadow-lg hover:shadow-2xl group gap-8"
                 onMouseLeave={() => setActiveIndex()}
                 onMouseEnter={() => handleSetIndex(i)}
               >
                 <div className="flex justify-between items-center my-3  px-4 sm:px-8 h-10 cursor-pointer">
                   <h3 className="lg:text-xl md:text-xl sm:text-xl text-xs  pb-2 text-black font-semibold">{question}</h3>
                   <div className="text-3xl group-hover:rotate-180 transition duration-1500 ml-auto">
                     {/* Right Icon */}
                     <BiSolidChevronDown className="w-8 h-8  border-2 rounded-full text-green-500 border-green-500  group-hover:border-yellow-400 group-hover:text-yellow-400 " />
                   </div>
                 </div>
                 <div
                   x-ref="tab"
                   className={`border-l-2 rounded-bl-md border-yellow-500 dark:border-none overflow-hidden duration-[1500ms] transition-all ${
                     activeIndex === i ? "max-h-[500px]" : "max-h-0 "
                   }`}
                 >
                   <p className=" px-4 sm:px-8 py-2  p-3 text-xl font-light text-gray-700">
                     {answer}
                   </p>
                 </div>    
               </div>
            
            ))}
          </div>
        </div>
      </div>
    </section>






            {/* <div className=" h-screen bg-[#f5f4f0] border-indigo-500   relative  ">

        <div className="pt-36 text-5xl font-bold">Frequently asked questions about house <p className="mt-5"> cleaning</p> </div>
        <div className="w-full mt-8  flex justify-center items-center">

        <p className=" border-black border-2 w-20 text-center" ></p>
        
        </div>



        </div> */}
    
    
    </>);

}

export default AskedSection;