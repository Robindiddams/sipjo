import React, { Component } from 'react';
import {
	AnswerBox,
} from './components';
import {
	Page,
	Label,
	Title,
	NextButton,
} from '../../components/General';
import Questions from '../../static_data/en_60_questions';

export default class Hexaco extends Component {
	state = {
		questions: null,
	}
	answers = {};

	isComplete() {
		const unanswered = Questions.find((q) => {
			return !this.answers[q.number];
		});
		return unanswered === undefined;
	}

	calculateResults() {
		const honestyHumility = [ '6', '30R', '54', '12R', '36', '60R', '18', '42R', '24R', '48R' ];
		const emotionality = [ '5', '29', '53R', '11', '35R', '17', '41R', '23', '47', '59R' ];
		const extraversion = [ '4','28R', '52R', '10R', '34', '58', '16', '40', '22', '46R' ];
		const agreeableness = [ '3', '27', '9R', '33', '51', '15R', '39', '57R', '21R', '45' ];
		const conscientiousness = [ '2', '26R', '8', '32R', '14R', '38', '50', '20R', '44R', '56R' ];
		const opennessToExperience =[ '1R', '25', '7', '31R', '13', '37', '49R', '19R', '43', '55R' ];

		const process = (questionNumber) => {
			let vals = questionNumber.split('R');
			let num = parseInt(this.answers[vals[0]], 10);
			// Reverse scores if R
			if (vals.length === 2) {
				switch (num) {
					default :
						console.log('huh', num, vals, questionNumber);
						break;
					case 1:
						num = 5;
						break;
					case 2:
						num = 4;
						break;
					case 3:
						num = 3;
						break;
					case 4:
						num = 2;
						break;
					case 5:
						num = 1;
						break;
				}
			}
			return num;
		};

		const calculate = (questionList) => {
			return questionList.reduce((sum, next) => { return sum + process(next); }, 0.00) / questionList.length;
		}

		return {
			'Honesty-Humility': calculate(honestyHumility),
			'Emotionality': calculate(emotionality),
			'Extraversion': calculate(extraversion),
			'Agreeableness': calculate(agreeableness),
			'Conscientiousness': calculate(conscientiousness),
			'Openness to Experience': calculate(opennessToExperience),
		};
	}
	

	render() {
		return (
			<React.Fragment>
				<Page>
					<Title>
						Personality Test
					</Title>
					<Label>You are about to read 60 statements that describe you. Please rate how much you agree or disagree with each statement. Answer as accurately as possible but be careful not to spend too much time considering each statement.</Label>
					<div>
						{ Questions.map((q, i) => {
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
							sessionStorage.setItem(this.props.name, JSON.stringify(this.calculateResults()));
							this.props.nextPage();
						}}> 
							Next
						</NextButton> : <NextButton disabled>Next</NextButton> }
					</div>
				</Page>
			</React.Fragment>
		);
	}
}