import React, { Component } from 'react';
import {
	Card,
	StartButton,
	Title,
	Text,
} from './components';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Card>
					<Title>
						Welcome!
					</Title>
					<Text>
						The following experiment addresses personality and judgement of others.<br/><br/>
						In order to accurately measure your personality, you will be asked to complete 3 tasks.<br/><br/>
						You will fill out a self-evaluation form, complete a personality assessment, and then you will be asked to judge the personality traits of two other people.<br/><br/>
						If you are focused, it should take no longer than 20 minutes for you to complete.<br/><br/>
						Once you begin, you cannot go back to another page and you must complete every page for your results to be considered valid.<br/><br/>
					</Text>
					<StartButton href='/test'>
						Start
					</StartButton>
				</Card>
			</React.Fragment>
		);
	}
}