import { css, keyframes } from 'styled-components'

const FadeInKeyFramse = keyframes`
  from{
    filter: blur(5px);
    opacity:0;
  }
  to {
    filter: blur(0px);
    opacity:1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${FadeInKeyFramse} ${type};
`
const scaleUp = keyframes`
    from {
      transform:scale(0.5);
    }
    to {
      transform:scale(1);
    }
`

export const scaleU = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${scaleUp} ${type};
  `
const placeHolderShimmer = keyframes`
    0%{
        background-position: -490px 0
    }
    100%{
        background-position: 490px 0
    }
`


export const skeletonAnimation = ({
  time = '2s',
  fill = 'forwards',
  iteration = 'infinite',
  timingFunction = 'linear',
  colorBackground = '#edeef1',
  colorAnimation =  '#f6f7f8'
} = {}) =>
  css`
    animation-duration: ${time};
    animation-fill-mode: ${fill};
    animation-iteration-count: ${iteration};
    animation-name: ${placeHolderShimmer};
    animation-timing-function: ${timingFunction};
    background-image: -webkit-gradient(
      linear,
      left center,
      right center,
      from(${colorBackground}),
      color-stop(0.2, ${colorAnimation}),
      color-stop(0.4, ${colorAnimation}),
      to(${colorBackground})
    );
    background-image: -webkit-linear-gradient(
      left,
      ${colorBackground} 0%,
      ${colorAnimation} 20%,
      ${colorBackground} 40%,
      ${colorBackground} 100%
    );
    position: relative;
  `

export const neon3 = keyframes`
from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 25px #fff, 0 0 20px #591c63, 0 0 35px #591c63, 0 0 40px #591c63, 0 0 50px #591c63, 0 0 75px #591c63;
  }
  to {
    text-shadow: 0 0 2.5px #fff, 0 0 5px #fff, 0 0 7.5px #fff, 0 0 10px #591c63, 0 0 17.5px #591c63, 0 0 20px #591c63, 0 0 25px #591c63, 0 0 37.5px #591c63;
  }

`;