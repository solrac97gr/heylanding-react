import styled from 'styled-components'

export const SelectHeroStyle = styled.div`
  display: flex;
  flex-direction: row;
  background: #6441a5; /* fallback for old browsers */
  position:fixed;
  width:100%;
  background: -webkit-linear-gradient(
    to left,
    #2a0845,
    #6441a5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #2a0845,
    #6441a5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 10% 18%;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    padding-top: 35%;
    padding-bottom: 20%;
    padding-left: 5%;
    padding-right: 5%;
  }
`

export const SelectTitleService = styled.span`
    font-size:2.5em;
    font-weight:600;
    color:white;
`