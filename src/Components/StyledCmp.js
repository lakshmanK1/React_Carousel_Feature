import styled from 'styled-components'


// Carousel Items
export const FirstDiv = styled.div` height:490px;
display:inline-flex; align-items:center; justify-content:center; 
background:#ffff`; 

export const Image = styled.img`width:250px; padding:0px 20px 0px 20px;`

export const TextDiv = styled.div`font-size:1.15rem; margin:40px 0 40px 0;
padding:0 20px 0 20px; white-space: normal; color:#617d98`;


// Carousel
export const OutterDiv = styled.div`width:700px; 
display:flex; flex-direction:column; overflow:hidden; 
justify-content:center; `;

export const InnerDiv = styled.div`white-space:nowrap; transition:transform 0.3s;
 box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); `;

 export const ButtonsDiv = styled.div`display:flex; justify-content:space-evenly;`;

 export const IndicatorBtn = styled.button`background:none; border:none; margin-top:17px;`;

 export const RadioBtnDiv = styled.div``;

 export const ArrowButton = styled.button`background:none; border:none;  margin-top:10px;
 cursor:pointer;`;