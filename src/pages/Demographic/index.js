import React, { Component } from 'react';
import {
	Label,
	DemoInputWrapper,
} from './components';
import {
	Page,
	Title,
	NextButton
} from '../../components/General';
import {
	RadioGroup,
	RadioButton,
} from 'react-radio-buttons';


export default class Demographic extends Component {
	state = {
		gender: '',
	}
	render() {
		return (
			<React.Fragment>
				<Page>
					<Title>
						Basic Info
					</Title>
					<Label>
						Please provide some basic info about yourself
					</Label>
					<Label>I identify as:</Label>
					<DemoInputWrapper>
						<RadioGroup horizontal onChange={(gender) => {
							this.setState({gender});
						}}>
							<RadioButton value="male" pointColor='lightsalmon'>
								Male
							</RadioButton>
							<RadioButton value="female" pointColor='lightsalmon'>
								Female
							</RadioButton>
							<RadioButton value="other" pointColor='lightsalmon'>
								Non-Binary/Other
							</RadioButton>
						</RadioGroup>
					</DemoInputWrapper>
					<Label>Here we would have something else</Label>
					{ this.state.gender !== '' ? <NextButton onClick={() => {
						// TODO: put data in session storage
						this.props.nextPage();
					}}> 
						Next
					</NextButton> : <NextButton disabled>Next</NextButton>}
				</Page>
			</React.Fragment>
		);
	}
}