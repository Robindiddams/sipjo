import React, { Component } from 'react';
import {
	Text,
} from './components';
import {
	NextButton,
	Title,
	Page,
} from '../../components/General';

export default class Done extends Component {
	render() {
		return (
			<React.Fragment>
				<Page>
					<Title>
						Thank you!
					</Title>
					<Text>
						Thank you for participating in this research experiment.<br/>
						The assessment and evaluations you completed were based off of the HEXACO-PI-R.
						You can find more information about it <a href='hex'>here</a>.
					</Text>
					{ JSON.parse(sessionStorage.getItem('results')).method === 'deflate' ? <Text>
						The results you received from the exam were not accurate, as part of the experiment. Please do not share this information with anyone.
						</Text> : ''}
					<Text>If you have any questions, please email <a href='mailto:christina.knaak@mymail.champlain.edu'>christina.knaak@mymail.champlain.edu</a>.</Text>
					<NextButton onClick={() => {
						this.props.nextPage();
					}}> 
						Home
					</NextButton>
				</Page>
			</React.Fragment>
		);
	}
}