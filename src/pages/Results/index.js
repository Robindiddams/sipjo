import React, { Component } from 'react';
import {
	GraphBox,
} from './components';
import {
	Label,
	Page,
	Title,
	NextButton,
	Loading,
} from '../../components/General';
import Traits from '../../static_data/en_trait_definitions';

const scoreTypes = [
	'skip',
	'deflate',
	'regular',
]

export default class Results extends Component {
	constructor(props) {
		super(props);
		this.scoreType = scoreTypes[Math.floor(Math.random() * Math.floor(3))];
		this.state = {};
	}

	componentDidMount() {
		let testScores = JSON.parse(sessionStorage.getItem('hexaco'));
		console.log(this.scoreType);
		if (this.scoreType === 'skip') {
			this.props.nextPage();
		} else if (this.scoreType === 'deflate') {
			testScores = Object.keys(testScores).reduce((acc, next) => {
				acc[next] = (testScores[next] - 1.5).toFixed(2);
				return acc;
			}, {});
		}
		this.setState({ scores: testScores});
	}

	render() {
		return (
			<React.Fragment>
				<Page>
					<Title>
						Results
					</Title>
					<Label>Here are the results of your personality test</Label>
					{ this.state.scores ? Traits.map((trait, i) => (<GraphBox
						key={i}
						value={this.state.scores[trait.name]}
						title={trait.name}
						body={trait.definiton}
					/>)) : <Loading/> }
					<Label>This information will not be linked to your name.</Label>
					<NextButton onClick={() => {
						sessionStorage.setItem(this.props.name, JSON.stringify({method: this.scoreType}));
						this.props.nextPage();
					}}> 
						Next
					</NextButton>
				</Page>
			</React.Fragment>
		);
	}
}