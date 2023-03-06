import React,{useState} from 'react'
import CarouselItem from './CarouselItem'
import { RawData } from './RawData'
import { OutterDiv, InnerDiv } from './StyledCmp'

function Carousel() {
    
  return (
    <OutterDiv>
        <InnerDiv>
            {
                RawData.map((item)=>(
                    <CarouselItem items={item} key={item.id}/>
                ))
            }
        </InnerDiv>
    </OutterDiv>
  )
}

export default Carousel