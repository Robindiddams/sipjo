import React, { Component } from 'react';
import {
	Text,
} from './components';
import Consent from  '../Consent';
import Demographic from  '../Demographic';
import Eval from  '../Eval';
import Results from  '../Results';
import Hexaco from  '../Hexaco';
import Done from  '../Done';
import Scenario from  '../Scenario';
import {
	Page,
	Title,
} from '../../components/General';

const pageOrder = [
	'consent',
	'demo',
	'selfeval',
	'hexaco',
	'results',
	'scenario',
	'done',
]

export default class Test extends Component {
	state = {
		page: 0,
	}
	
	getSesseion() {
		return {
			consent: JSON.parse(sessionStorage.getItem('consent')),
			demo: JSON.parse(sessionStorage.getItem('demo')),
			selfeval: JSON.parse(sessionStorage.getItem('selfeval')),
			hexaco: JSON.parse(sessionStorage.getItem('hexaco')),
			results: JSON.parse(sessionStorage.getItem('results')),
			scenario: JSON.parse(sessionStorage.getItem('scenario')),
		};
	}

	componentDidMount() {
		const session = this.getSesseion();
		console.log(session);
		const incomplete = Object.keys(session).find((page) => session[page] === null);
		if (incomplete) {
			for (let i = 0; i < pageOrder.length; i++) {
				if (session[pageOrder[i]] === null) {
					this.setState({page:i});
					break;
				}
			}
		}
	}

	render() {
		switch (this.state.page) {
			case 0:
				return (
					<Consent
						name='consent'
						nextPage={() => {
							this.setState({page: 1});
						}}
					/>
				);
			case 1:
				return (
					<Demographic
						name='demo'
						nextPage={() => {
							this.setState({page: 2});
						}}
					/>
				);
			case 2:
				return (
					<Eval
						name='selfeval'
						nextPage={() => {
							this.setState({page: 3});
						}}
					/>
				);
			case 3:
				return (
					<Hexaco
						name='hexaco'
						nextPage={() => {
							this.setState({page: 4});
						}}
					/>
				);
			case 4:
				return (
					<Results
						name='results'
						nextPage={() => {
							this.setState({page: 5});
						}}
					/>
				);
			case 5:
				return (
					<Scenario
						name='scenario'
						nextPage={() => {
							this.setState({page: 6});
						}}
					/>
				);
				case 6:
				return (
					<Done
						name='done'
						nextPage={() => {
							sessionStorage.clear();
							console.log('cleared session storage');
							window.location = '/';
						}}
					/>
				);
			default:
				return(
					<React.Fragment>
						<Page>
							<Title>
								Not found
							</Title>
							<Title onClick={() => {
								sessionStorage.clear();
								console.log('cleared session storage');
							}}>
								click me to clear session
							</Title>
							<Text/>
						</Page>
					</React.Fragment>
				);
		}
	}
}