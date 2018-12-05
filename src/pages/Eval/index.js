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
} from '../../components/General';
import Traits from '../../static_data/en_trait_definitions';

export default class Eval extends Component {
	state = {};
	answers = {};

	isComplete() {
		const unanswered = Traits.find((trait) => {
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
					{ Traits.map((trait, i) => (<SlideBox
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
					/>)) }
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