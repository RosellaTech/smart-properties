import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md';
import'./Value.css'
import data from '../../utils/accordion'


const Value = () => {
  return (

  <section className='v-wrapper'>
    <div className='paddings innerWidth flexCenter v-container'>
     {/*left side*/}
      <div className="v-left">
        <div className="image-container">
          <img src="./value.png" alt="" />
        </div>
      </div>

    {/*right side*/}
     <div className="flexColStart v-right">
      <span className='orangeText'>Our Value</span>
      <span className='primaryText'>The Value We Give To You</span>
      <span className='secondaryText'>This upscale area is known for its high-end luxury apartments with ocean views. <br />This area is known for its hotel apartments and serviced apartments, offering a blend of hotel amenities and apartment privacy. 
      </span>
        
        <Accordion 
        className='accordion'
        allowMultipleExpanded={false}
        preExpanded={[0]}>

          {data.map((item, i)=>{
            const [className, setclassName] = useState(null)
            return (
               <AccordionItem className={`accordionItem ${className}`} key ={i} uuid={i}>
                 <AccordionItemHeading>
                    <AccordionItemButton className=' flexCenter accordionButton'>

                      <AccordionItemState>
                        {({expanded})=> expanded ? setclassName("expanded") : setclassName("colapsed")}
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon} </div>
                      <span className='primaryText'>
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20}/>
                      </div>
                    </AccordionItemButton>
                 </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className='secondaryText'>{item.detail}</p>
                  </AccordionItemPanel>
               </AccordionItem>
            )
            
           })
          }
        </Accordion>
     </div>
    </div>
  </section>


  )
}

export default Value