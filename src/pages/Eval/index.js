import React, { Component } from 'react';
import {
	SlideBox,
} from './components';
import {
	Hr,
	Label,
	Page,
	Title,
	NextButton,
	Loading,
} from '../../components/General';

export default class Eval extends Component {
	state = {};
	answers = {};

	componentDidMount() {
		fetch(
			'https://8574rpcel7.execute-api.us-east-1.amazonaws.com/dev/hexaco/traits',
			{
				method: 'GET',
				mode: 'cors',
			},
		).then(response => response.json()).then((data) => {
			this.setState({ traits: data.traits });
		});
	}

	isComplete() {
		if (!this.state.traits) {
			return false;
		}
		const unanswered = this.state.traits.find((trait) => {
			return !this.answers[trait.name];
		});
		return unanswered === undefined;
	}

	render() {
		return (
			<React.Fragment>
				<Page>
					<Title>
						Self Eval
					</Title>
					<Label>Please evaluate yourself.</Label>
					<Hr margin='0px'/>
					{ this.state.traits ? this.state.traits.map((trait, i) => (<SlideBox
						key={i}
						onUpdate={(value) => {
							this.answers[trait.name] = value;
							let s = {};
							s[trait.name] = value;
							console.log(s);
							this.setState(s);
						}}
						title={trait.name}
						body={trait.definiton}
					/>)) : <Loading/> }
					<Label>This information will not be linked to your name.</Label>
					{ this.isComplete() ? <NextButton onClick={() => {
						console.log(this.answers);
						sessionStorage.setItem(this.props.name, JSON.stringify(this.answers));
						this.props.nextPage();
					}}> 
						Next
					</NextButton> : <NextButton disabled>Next</NextButton>}
				</Page>
			</React.Fragment>
		);
	}
}