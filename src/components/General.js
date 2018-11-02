import styled, { keyframes } from 'styled-components';

export const Expand = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Page = styled.div`
	max-width: 1000px;
	padding: 10px;
	padding-left: 50px;
	padding-right: 50px;
	padding-bottom: 20px;
	box-shadow: 1px 2px 3px lightgrey;
	width: 90%;
	margin: auto;
	margin-top: 10vh;
	background: white;
	animation: ${Expand} .25ss;
`;

export const NextButton = styled.button`
    text-decoration: none;
    background: ${props => props.disabled ? 'lightgrey' : 'lightsalmon'};
    border-radius: 3px;
    border: 2px solid ${props => props.disabled ? 'lightgrey' : 'lightsalmon'};
    font-weight: bold;
    font-family: roboto, sans-serif;
    color: white;
    padding: 0.5em 1em;
    font-size: 20px;
    cursor: ${props => props.disabled ? 'cancel' : 'pointer'};
    &:${props => props.disabled ? 'not' : 'hover'} {
        background-color: white;
        color: lightsalmon;
		}
		
`;

export const Title = styled.div`
    font-weight: bold;
    font-family: roboto, sans-serif;
    color: lightsalmon;
    font-size: 25px;
    margin-top: 10px;
`;

