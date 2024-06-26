import { TbInfoSquareFilled } from 'react-icons/tb'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box
  } from '@chakra-ui/react'
  
  const Include = () => {
    const cleanmethods = [
      {
        heading: "General cleaning in all rooms",
        description: [
          "Window cleaning.",
          "Vacuuming and wiping of carpentry, skirting boards, free surfaces, doors, door frames, windowsills, wardrobe doors, and cabinet doors.",
          "Wiping interior and exterior of wardrobes, cabinets, and bookshelves.",
          "Wiping floor rails for sliding doors.",
          "Vacuuming and wiping of radiators.",
          "Dry dusting of walls.",
          "Dry dusting of electrical sockets.",
          "Dry dusting of lamps.",
          "Mirror polishing.",
          "Removal of ash from tiled stoves and fireplaces.",
          "Wiping of front doors.",
          "Vacuuming and mopping of floors.",
        ]
      },
      {
        heading: "Bathrooms",
        title: "We perform general cleaning steps, as well as:",
        description: [
          "Cleaning of walls and floors.",
          "Polish faucets, pipes, and shower nozzles.",
          "Degrease and descale walls and joints in shower areas where possible.",
          "Cleaning of the floor drain.",
          "Cleaning of shower or bathtub (customer is responsible for removal of the bathtub front).",
          "Cleaning interior and exterior of the bathroom cabinet.",
          "Cleaning of faucet and basin.",
          "Cleaning of the toilet.",
          "Cleaning the exterior of the bathroom appliances and the washing machine’s detergent holder.",
          "Cleaning of the filter in the tumble dryer.",
          ]
      },
      {
        heading: "Kitchen",
        title: "We perform general cleaning steps, as well as:",
        description: [
          "Cleaning the interior and exterior of the fridge and freezer.",
          "Cleaning the interior and exterior of the stove and oven, also plates and grilles.",
          "Cleaning of kitchen fan and fan filter (not carbon filter).",
          "Cleaning the interior and exterior of cupboards, shelves, and drawers.",
          "Cleaning of the tiles/splash guard above the sink.",
          "Cleaning under cabinets and wiping bases.",
          "Cleaning microwave interior and exterior.",
          "Cleaning the interior and exterior of the dishwasher, the rubber strip, the detergent compartment, and the filter.",
          "Empty the rubbish and wipe clean the rubbish bin.",
          "Polish the sink, faucet, stopper, and strainer.",
         
        ]
      },
      {
        heading: "Hallways",
        title: "We perform general cleaning steps, as well as:",
        description: [
          "Dry dusting of handrails, banisters, and stair rails.",
          "Wiping of the coat rack.",
          "Wiping of fuse cabinet.",
        ]
        
      },
  
    ]
    return (
  
      <div className="py-14 bg-[#eae8e1] ">
        <div className="   relative  ">
  
          <div className="pt-12 text-5xl font-bold">What is included in our move out cleaning?</div>
          <div className="w-full mt-8  flex justify-center items-center">
            <p className=" border-black border-2 w-20 text-center" ></p>
          </div>
          <div className="mt-8 text-lg leading-7  ">
            <p>Once all of the boxes have been packed and everything is gone, there is rarely energy left </p>
            <p>to clean up. We'll help you, and make your home look like new, from floor to ceiling.</p>
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
  
  export default Include;