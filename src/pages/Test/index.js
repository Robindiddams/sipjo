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
import Loading from '../Loading';

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
			done: JSON.parse(sessionStorage.getItem('done')),
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

	sendConsent(cb) {
		const consent = JSON.parse(sessionStorage.getItem('consent'));
		fetch('https://f23r1svfs7.execute-api.us-east-1.amazonaws.com/dev/consent', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({name: consent.name}),
		})
		.then(resp => resp.json)
		.then(data => {
			console.log(data);
			cb();
		});
	}

	sendData(cb) {
		const session = this.getSesseion();
		delete session.consent;
		delete session.done;
		fetch('https://f23r1svfs7.execute-api.us-east-1.amazonaws.com/dev/results', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(session),
		})
		.then(resp => resp.json)
		.then(data => {
			console.log(data);
			cb();
		});
	}

	render() {
		switch (this.state.page) {
			case 0:
				return (
					<Consent
						name='consent'
						nextPage={() => {
							// set to loading
							this.setState({page: -1});
							this.sendConsent(() => {
								this.setState({page: 1});
							})
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
							// set to loading
							this.setState({page: -1});
							this.sendData(() => {
								this.setState({page: 6});
							})
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
				case -1:
				return (
					<Loading
						name='loading'
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