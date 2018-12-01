import styled, { keyframes } from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import CircularProgress from '@material-ui/core/CircularProgress';

/*
	Animations
*/

export const Expand = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

/*
	General
*/

export const Label = styled.div`
	font-family: roboto, sans-serif;
	color: grey;
	margin-top: 20px;
	margin-bottom: 10px;
	text-align: ${props => props.align ? props.align : 'center'};
`;

export const Page = styled.div`
	max-width: 1000px;
	padding: 10px;
	padding-left: 50px;
	padding-right: 50px;
	padding-bottom: 20px;
	box-shadow: 1px 2px 3px lightgrey;
	// width: 90%;
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

export const Hr = styled.div`
    height: 1px;
    margin-left: ${props => props.margin ? props.margin : '30px'};
    margin-right: ${props => props.margin ? props.margin : '30px'};
    background: ${props => props.color ? props.color : 'lightgrey'};
`;

export const Title = styled.div`
    font-weight: bold;
    font-family: roboto, sans-serif;
    color: lightsalmon;
    font-size: 25px;
    margin-top: 10px;
`;

/*
		Inputs
*/

const InputWrapper = styled.div`
	margin-right:10px;
`;

const FancyLabel = styled(({ ...other }) => (
  <InputLabel {...other} classes={{ focused: 'focused' }} />
))`
	&.focused {
		color: lightsalmon !important;
	}
`;

const FancyInput =styled(({ color, ...other }) => (
  <Input {...other} classes={{ underline: 'underline' }} />
))`
	min-width: ${props => props.size ? props.size : '5em'};
	&.underline {
		&:after {
			color: lightsalmon;
			border-bottom: 2px solid lightsalmon;
		}
	}
`;

export class TextBox extends React.Component {
	render() {
	  return (
		<InputWrapper>
			<FormControl>
				<FancyLabel>{this.props.label}</FancyLabel>
				<FancyInput
					size={this.props.size}
					onChange={this.props.onChange}
				/>
			</FormControl>
		</InputWrapper>
	  );
	}
}


export class SelectBox extends React.Component {
	render() {
	  return (
		<InputWrapper>
			<FormControl>
				<FancyLabel>{this.props.label}</FancyLabel>
				<Select
					value={this.props.value}
					onChange={this.props.onChange}
					input={<FancyInput size={this.props.size}/>}
				>
					{this.props.children}
				</Select>
			</FormControl>
		</InputWrapper>
	  );
	}
}

/*
 Spinner
*/

const SalmonSpinner = styled(({ ...other }) => (
	<CircularProgress {...other} classes={{ root: 'root', colorPrimary: 'colorPrimary' }} />
))`
	&.colorPrimary {
		color: lightsalmon !important;
	}
`;

const LoadingWrapper = styled.div`
	margin: auto;
	margin: 80px;
`;

export const Loading = props => (
	<LoadingWrapper>
		<SalmonSpinner/>
	</LoadingWrapper>
);
