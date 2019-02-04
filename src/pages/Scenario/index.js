import React, { Component } from 'react';
import {
	Article,
	ArticleBox,
	RateBox,
	Question,
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
		this.state = { relateToAnswer: '' };
		this.answers = {};
	}

	traitName(trait, name) {
		return `${trait}_${name}`;
	}

	isComplete() {
			const checkName = (name) => {
				const unanswered = Traits.find((trait) => {
					if (this.answers[name]) {
						return !this.answers[name][trait.name];
					}
					return false;
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
					{ names.map((name, i) => (
						<div key={i}>
							{ i !== 0 ? <Label>The story is repeated here for your convenience.</Label> : '' }
							<ArticleBox>
								{ atob(scenario_data.scenario).split('\n').map((line, i) => (<Article key={i}>{line}</Article>)) }
							</ArticleBox>
							<RateBox
								subject={name}
								onAnswer={(value, trait) => {
									if (!this.answers[name]) {
										this.answers[name] = {};
									}
									this.answers[`${name}`][trait.name] = value;
									this.setState({done: this.isComplete()});
								}}
							/>
						</div>
					))}
					<Question
						onChange={(event) => {
							this.setState({relateToAnswer: event.target.value})
						}}
						items={names}
						value={this.state.relateToAnswer}
						label='select'
					/>
					<Label>This information will not be linked to your name.</Label>
					{ this.state.done && this.state.relateToAnswer ? <NextButton onClick={() => {
						this.answers.relatesTo = this.state.relateToAnswer;
						sessionStorage.setItem(this.props.name, JSON.stringify(this.answers, null, 2));
						this.props.nextPage();
					}}> 
						Next
				</NextButton> : <div><Label>You must move every slider to continue.</Label><NextButton disabled>Next</NextButton></div> }
				</Page>
			</React.Fragment>
		);
	}
}