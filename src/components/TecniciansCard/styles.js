import styled,{css} from 'styled-components'

export const TecniciansCardStyled = styled.div`
width:25%;
box-shadow:0px 1px 3px rgba(0,0,0,0.3);
margin:10px;
border-radius:6px;
color:white;
@media (max-width: 500px) {
    width: 100%;
    margin:10px 0px;
}
`
export const TecniciansCardHeader = styled.div`
background: #FDC830;  
background: -webkit-linear-gradient(to right, #F37335, #FDC830); 
background: linear-gradient(to right, #F37335, #FDC830); 
padding:40px 10px;
border-radius:6px 6px 18px 0px;
margin-bottom:15px;
display:flex;
flex-direction:row;
justify-content:space-between;
`
export const ButtonContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-bottom:10px;
`
export const Button =styled.button`
font-size:.8em;
padding:3px 10px;
font-weight:600;
color:#C4C4C4;
${props => props.primary && css`
    color: #B35B03;
  `}
`
export const ColumnText = styled.div`
display:flex;
flex-direction:column;
`