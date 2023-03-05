import React from 'react'
import { FirstDiv, SecondDiv, Image, TextDiv } from './StyledCmp'

function CarouselItem(props) {
  return (
    <FirstDiv>
        <SecondDiv>
            <Image src={props.items.image}/>
            <TextDiv>{props.items.description}</TextDiv>
        </SecondDiv>
    </FirstDiv>
  )
}

export default CarouselItem