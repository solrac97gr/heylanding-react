import styled from 'styled-components'

export const BannerTecContainer = styled.div`
display:flex;
flex-direction:row;
padding:10% 18% 0% 18%;
justify-content:space-between;
background-color:#7b1fa2;
text-align:left;
align-content:center;
vertical-align:middle;
@media (max-width: 500px) {
  display:none;
}
`
export const MktTitle = styled.span`
display:flex;
width:50%;
color:white;
font-size:3em;
text-shadow:0px 3px 6px rgba(0,0,0,0.3);
vertical-align:middle;
`
export const Img = styled.img`
width:23%;
`