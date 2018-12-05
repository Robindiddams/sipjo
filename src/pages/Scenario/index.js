import React, { Component } from 'react';
import {
	Article,
	ArticleBox,
	RateBox,
} from './components';
import {
	Label,
	Page,
	Title,
	NextButton,
} from '../../components/General';
import scenario_data from '../../static_data/scenario';
import Traits from '../../static_data/en_trait_definitions';


const names = [
	'alex',
	'jordan',
]

export default class Scenario extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.answers = {};
	}

	componentDidMount() {
		console.log('lol', atob(scenario_data.scenario));
	}

	traitName(trait, name) {
		return `${trait}_${name}`;
	}

	isComplete() {
			const checkName = (name) => {
				const unanswered = Traits.find((trait) => {
					return !this.answers[this.traitName(trait.name, name)];
				});
				return unanswered === undefined;
			};
			return checkName('jordan') && checkName('alex');
	}

	render() {
		return (
			<React.Fragment>
				<Page>
					<Title>
						Scenario
					</Title>
					<Label>{scenario_data.instructions}</Label>
					<ArticleBox>
						{ atob(scenario_data.scenario).split('\n').map((line, i) => (<Article key={i}>{line}</Article>)) }
					</ArticleBox>
					{ names.map((name, i) => (
						<RateBox
							key={i}
							subject={name}
							onAnswer={(value, trait) => {
								this.answers[this.traitName(trait.name, name)] = value;
								this.setState({done: this.isComplete()});
							}}
						/>
					))}
					<Label>This information will not be linked to your name.</Label>
					{ this.state.done ? <NextButton onClick={() => {
						sessionStorage.setItem(this.props.name, JSON.stringify({method: this.scoreType}));
						this.props.nextPage();
					}}> 
						Next
				</NextButton> : <NextButton disabled>Next</NextButton> }
				</Page>
			</React.Fragment>
		);
	}
}