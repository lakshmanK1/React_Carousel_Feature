import React from 'react'
import { FirstDiv, Image, TextDiv } from './StyledCmp'

function CarouselItem(props) {
  return (
    <FirstDiv>
            <Image src={props.items.image}/>
            <TextDiv>{props.items.description}</TextDiv>
    </FirstDiv>
  )
}

export default CarouselItem