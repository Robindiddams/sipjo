import React, { Component } from 'react';
import {
	AnswerBox,
} from './components';
import {
	Page,
	Label,
	Loading,
	Title,
	NextButton,
} from '../../components/General';

export default class Hexaco extends Component {
	state = {
		questions: null,
	}
	answers = {};

	componentDidMount() {
		fetch(
			'https://8574rpcel7.execute-api.us-east-1.amazonaws.com/dev/hexaco/questions',
			{
				method: 'GET',
				mode: 'cors',
			},
		).then(response => response.json()).then((data) => {
			this.setState({questions: data.questions});
		});
	}

	isComplete() {
		if (!this.state.questions) {
			return false;
		}
		const unanswered = this.state.questions.find((q) => {
			return !this.answers[q.number];
		});
		return unanswered === undefined;
	}

	render() {

		return (
			<React.Fragment>
				<Page>
					<Title>
						Personality Test
					</Title>
					{ !this.state.questions ? <Loading/> : <div>
					{ this.state.questions.map((q, i) => {
						const { question, number } = q;
						return (
							<AnswerBox
							key={i}
							onChange={(answer) => {
								this.answers[String(number)] = answer;
								// console.log(this.answers);
								this.setState({done: this.isComplete()});
							}}
							number={ number }
							question={ question }
						/>
						);
					})}
					<Label>This information will not be linked to your name.</Label>
					{ this.state.done ? <NextButton onClick={() => {
						// TODO: put data in session storage
						this.props.nextPage();
					}}> 
						Next
					</NextButton> : <NextButton disabled>Next</NextButton>}
						</div> }
				</Page>
			</React.Fragment>
		);
	}
}