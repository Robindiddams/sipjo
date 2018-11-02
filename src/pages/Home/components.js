import styled from 'styled-components';

export const StartButton = styled.a`
    text-decoration: none;
    background: lightsalmon;
    border-radius: 3px;
    border: 2px solid lightsalmon;
    font-weight: bold;
    font-family: roboto, sans-serif;
    color: white;
    padding: 0.5em 1em;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: lightsalmon;
    }
`;


export const Card = styled.div`
    max-width: 400px;
	padding: 10px;
	padding-bottom: 20px;
	box-shadow: 1px 2px 3px lightgrey;
	width: 90%;
	margin: auto;
    margin-top: 10vh;
    background: white;
`;

export const Title = styled.div`
    font-weight: bold;
    font-family: roboto, sans-serif;
    color: lightsalmon;
    font-size: 25px;
    margin-top: 10px;
    // border-bottom: 1px solid lightgrey;
`;


export const Text = styled.div`
    // font-weight: bold;
    font-family: roboto, sans-serif;
    color: grey;
    font-size: 5;
    padding: 20px;
`;

export const Hr = styled.div`
    height: 1px;
    margin-left: 30px;
    margin-right: 30px;
    background: lightgrey;
`;
