import styled from 'styled-components'
import {skeletonAnimation} from '../../styles/animation'

export const Loader = styled.div`
height:150px;
background-color:white;
color:transparent;
border-radius:6px;
margin:10px;
z-index:-1;
width:25%;
${skeletonAnimation};
box-shadow:0px 1px 3px rgba(0,0,0,0.3);
@media (max-width: 500px) {
    width: 100%;
    margin:8px 0px;
}
`

