import React,{useState} from 'react'
import CarouselItem from './CarouselItem'
import { RawData } from './RawData'
import { OutterDiv, InnerDiv, RadioBtnDiv, ButtonsDiv,IndicatorBtn, ArrowButton} from './StyledCmp'
import {IoMdRadioButtonOn, IoMdRadioButtonOff} from 'react-icons/io'
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const updateIndex = (index) => {
    if(index < 0){
      index = RawData.length-1;
    }else if(index > RawData.length-1){
      index = 0;
    }
    setActiveIndex(index);
  }

  return (
    <OutterDiv>
        <InnerDiv style={{transform: `translate(-${activeIndex * 100}%)`}}>
            {
                RawData.map((item)=>(
                    <CarouselItem items={item} key={item.id}/>
                ))
            }
        </InnerDiv>

        <ButtonsDiv>

          <ArrowButton onClick={()=>{updateIndex(activeIndex-1)}}>
            <MdOutlineKeyboardArrowLeft style={{fontSize:'40px'}}/>
          </ArrowButton>

          <RadioBtnDiv>
            {
              RawData.map((data, index)=>(
                <IndicatorBtn onClick={()=>{updateIndex(index)}}>{index === activeIndex ? <IoMdRadioButtonOn style={{fontSize:'18px'}}/> : <IoMdRadioButtonOff style={{fontSize:'18px'}}/>}</IndicatorBtn>
              ))
            }
          </RadioBtnDiv>

          <ArrowButton onClick={()=>{updateIndex(activeIndex+1)}}>
            <MdOutlineKeyboardArrowRight style={{fontSize:'40px'}}/>
          </ArrowButton>
        </ButtonsDiv>
    </OutterDiv>
  )
}

export default Carousel