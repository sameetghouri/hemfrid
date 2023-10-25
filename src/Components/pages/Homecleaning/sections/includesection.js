import { TbInfoSquareFilled } from 'react-icons/tb'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Box
} from '@chakra-ui/react'

const Includesection = () => {
  const cleanmethods = [
    {
      heading: "General cleaning in all rooms",
      title: "Our home cleaning includes the following cleaning services as a standard in all rooms:",
      description: [
        "Vacuuming of floors, moldings, electrical sockets, radiators, carpets, and upholstered textile furniture.",
        "Mopping of floors or other types of cleaning according to agreement.",
        "Wipe off doors and frames where we can access them.",
        "Dry dusting of windowsills and free surfaces.",
        "Dry dusting of lamps, shelves, and picture frames that we can access.",
        "Dry dusting of electronics (not the screen).",
        "Mirror polishing.",
        "Make the beds.",
        "Empty and wipe rubbish bins.",
      ]
    },
    {
      heading: "Bathrooms",
      title: "We perform general cleaning steps, as well as:",
      description: [
        "Cleaning bathtubs, showers, sinks, and toilets.",
        "Wipe off stains from walls.",
        "Wipe off bathroom cabinets and appliances.",
        ]
    },
    {
      heading: "Kitchen",
      title: "We perform general cleaning steps, as well as:",
      description: [
        "Cleaning the sink and kitchen counter, stove, and wall behind the stove and sink.",
        "Cleaning microwave interior and exterior.",
        "Interior and exterior cleaning of cabinets where rubbish bins are located.",
        "Wipe off kitchen doors.",
        "Wipe off the kitchen fan and the outside of other appliances.",
        "Emptying the household rubbish.",
      ]
    },
    {
      heading: "Our own cleaning products",
      title: "The cleaning service contract also includes our eco-friendly cleaning products which are delivered to your home and refilled when they run out.",
      
    },

  ]
  return (

    <div className="py-14 bg-[#eae8e1] ">
      <div className="   relative  ">

        <div className="pt-12 text-5xl font-bold">What is included in our home cleaning?</div>
        <div className="w-full mt-8  flex justify-center items-center">
          <p className=" border-black border-2 w-20 text-center" ></p>
        </div>
        <div className="mt-8 text-lg leading-7  ">
          <p>It’s perfectly fine to need help sometimes, like with cleaning, for example. As one of our</p>
          <p>home cleaning customers, you will receive same-day cleaning, every week or every other</p>
          <p>week at a fixed monthly rate.</p>
        </div>

      </div>

      <div className='px-2 py-8 flex justify-center text-gray-700'>
        <Accordion  allowMultiple className='grid lg:grid-cols-2 w-full max-w-6xl gap-8' >
          {cleanmethods.map((item, index) => (
            <AccordionItem className='col-span-1 ' key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' className='text-3xl text-gray-800'>
                <div className='flex '>
                      <TbInfoSquareFilled className='w-10  pr-2' />
                      <h4>{item.heading}</h4>
                    </div>
                </Box>
                <AccordionIcon className="w-12"/>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <h3 className='text-start text-xl pb-1'>{item.title}</h3>
              <ul className='list-disc text-start text-xl pl-5 space-y-3'>
              {item?.description?.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
              </ul>
            </AccordionPanel>
          </AccordionItem>
          ))}
        </Accordion>
      </div>



    </div>
  );

}

export default Includesection;