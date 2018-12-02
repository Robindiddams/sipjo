import React, { Component } from 'react';
import {
	InfoRow,
} from './components';
import {
	Page,
	Label,
	Title,
	NextButton,
	SelectBox,
	TextBox,
} from '../../components/General';
import MenuItem from '@material-ui/core/MenuItem';

export default class Demographic extends Component {
	state = {
		age:'',
		gender: '',
		ethnicity:'',
		religion:'',
		education:'',
	}

	render() {
		/*
		Age (have a box for them to write it in)
		Gender (male, female, nonb)
		Ethnicity (white, African American, Asian, Hispanic/Latinx American, Pacific Islander, Native American, other)
		Religion/spirituality (Christian, catholic, Jewish, Islam, Buddhist, Hindu, new age, none, other)
		Education level (high school, some college, bachelors, masters and above)
		*/
		const genders = [
			'male',
			'female',
			'nonbinary',
		];
		const ethnicities = [
			'White',
			'African American',
			'Asian',
			'Hispanic/Latinx American',
			'Pacific Islander',
			'Native American',
			'Other',
		];
		const religions = [
			'None',
			'Christian',
			'Catholic',
			'Jewish',
			'Islam',
			'Buddhist',
			'Hindu',
			'New Age',
			'Other',
		];
		const educations = [
			'High School',
			'Some College',
			'Bachelors',
			'Masters and above',
		];

		const checkValues = () => {
			return genders.indexOf(this.state.gender) !== -1 && 
				ethnicities.indexOf(this.state.ethnicity) !== -1 && 
				religions.indexOf(this.state.religion) !== -1 && 
				educations.indexOf(this.state.education) !== -1 &&
				this.state.age && !isNaN(this.state.age);
		}

		return (
			<React.Fragment>
				<Page>
					<Title>
						Basic Info
					</Title>
					<Label align='left'>Please fill out all of these</Label>
					<InfoRow>
						<SelectBox
							label='gender'
							value={this.state.gender}
							onChange={(event) => {
								this.setState({gender:event.target.value})
							}}
						>
							{genders.map((gender) => { return(<MenuItem key={gender} value={gender}>{gender}</MenuItem>);})}
						</SelectBox>
						<SelectBox
							label='ethnicity'
							value={this.state.ethnicity}
							onChange={(event) => {
								this.setState({ethnicity:event.target.value})
							}}
						>
							{ethnicities.map((ethnicity) => { return(<MenuItem key={ethnicity} value={ethnicity}>{ethnicity}</MenuItem>);})}
						</SelectBox>
						<TextBox
							onChange={(event) => {
								this.setState({age: event.target.value})
							}}
							label='age'
							size='3em'
						/>
					</InfoRow>
					<InfoRow>
						<SelectBox
							label='religion/spirituality'
							size='10em'
							value={this.state.religion}
							onChange={(event) => {
								this.setState({religion:event.target.value})
							}}
						>
							{religions.map((religion) => { return(<MenuItem key={religion} value={religion}>{religion}</MenuItem>);})}
						</SelectBox>
						<SelectBox
							label='education level'
							size='9em'
							value={this.state.education}
							onChange={(event) => {
								this.setState({education:event.target.value})
							}}
						>
							{educations.map((education) => { return(<MenuItem key={education} value={education}>{education}</MenuItem>);})}
						</SelectBox>
					</InfoRow>
					<Label align='left'>This information will not be linked to your name.</Label>
					{ checkValues() ? <NextButton onClick={() => {
						sessionStorage.setItem(this.props.name, JSON.stringify(this.state));
						this.props.nextPage();
					}}> 
						Next
					</NextButton> : <NextButton disabled>Next</NextButton>}
				</Page>
			</React.Fragment>
		);
	}
}