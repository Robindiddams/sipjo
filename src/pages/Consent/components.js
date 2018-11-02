import styled from 'styled-components';

export const ConsentInput = styled.input`
    padding: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    font-family: roboto, sans-serif;
    background: lavenderblush;
    margin-top:10px;
    border: none;
    border-radius: 3px;
`;

export const ConsentInputWrapper = styled.div`
    font-family: roboto, sans-serif;
    color: grey;
    // padding-left: 20px;
    text-align: left;
`;

export const Article = styled.div`
    font-family: roboto, sans-serif;
    color: grey;
    font-size: 5;
    padding-bottom: 10px;
    text-align: left;
`;

export const Text = styled.div`
    font-family: roboto, sans-serif;
    color: grey;
    font-size: 5;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: left;
`;