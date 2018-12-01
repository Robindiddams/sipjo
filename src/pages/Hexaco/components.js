import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';

const AnswerWrapper = styled.div`
	margin: auto;
	display: flex;
	border-bottom: 2px solid lightsalmon;
`;

const QuestionBox = styled.div`
	display: flex;
	align-self: center;
	text-align: left;
	width:50%;
	font-family: roboto, sans-serif;
	color: grey;
`;

const Number = styled.div`
	display: flex;
	align-self: center;
	font-family: roboto, sans-serif;
	color: lightsalmon;
	font-weight: bold;
	padding-right: 20px;
`;

const RadioWrapper = styled.div`
	margin: auto;
	display: flex;
	flex-direction: row;
	padding-top: 20px;
	justify-content: space-evenly;
	margin-bottom: 20px;
`;

const RadioPairWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width:20%
`;

const RadioLabel = styled.div`
	font-family: roboto, sans-serif;
	color: grey;
`;

const RadioButton = styled(({ ...other }) => (
	<Radio {...other} classes={{ checked: 'checked' }} />
))`
	&.checked {
		color: lightsalmon !important;
	}
`;


const RadioPair = props => (
<RadioPairWrapper>
	<RadioLabel>{props.label}</RadioLabel>
	<RadioButton
		checked={props.selectedValue === props.value}
		onChange={props.onChange}
		value={props.value}
		aria-label={props.value}
	/>
</RadioPairWrapper>
);

const RadioBox = props => (
<RadioWrapper>
	<RadioPair
		label='strongly disagree'
		selectedValue={props.value}
		onChange={props.onChange}
		value={'1'}
	/>
	<RadioPair
		label='disagree'
		selectedValue={props.value}
		onChange={props.onChange}
		value={'2'}
	/>
	<RadioPair
		label='neutral'
		selectedValue={props.value}
		onChange={props.onChange}
		value={'3'}
	/>
	<RadioPair
		label='agree'
		selectedValue={props.value}
		onChange={props.onChange}
		value={'4'}
	/>
	<RadioPair
		label='strongly agree'
		selectedValue={props.value}
		onChange={props.onChange}
		value={'5'}
	/>
</RadioWrapper>
);

export class AnswerBox extends React.Component {
	state = {
    selectedValue: '',
	};

	handleChange = event => {
		this.setState({ selectedValue: event.target.value });
		this.props.onChange(event.target.value);
	};

	render() {
	  return (
			<AnswerWrapper>
				<QuestionBox>
				<Number>{this.props.number}</Number>
					{this.props.question}
				</QuestionBox>
				<RadioBox 
					onChange={this.handleChange}
					value={this.state.selectedValue}
				/>
			</AnswerWrapper>
	  );
	}
}
