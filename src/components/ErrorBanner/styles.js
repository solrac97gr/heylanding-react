import styled from "styled-components"
import {fadeIn} from "../../styles/animation"

export const ErrorContainer = styled.div`
color:white;
padding:5px;
border-radius:6px;
margin:5px;
background-color:red;
${fadeIn({time:"0.7s"})};
text-align:center;
`