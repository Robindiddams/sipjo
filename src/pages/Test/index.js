import React, { Component } from 'react';
import {
	Text,
} from './components';
import Consent from  '../Consent';
import Demographic from  '../Demographic';
import Eval from  '../Eval';
import Results from  '../Results';
import Hexaco from  '../Hexaco';
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
		};
	}

	componentDidMount() {
		const session = this.getSesseion();
		console.log(session);
		const incomplete = Object.keys(session).find((page) => session[page] === null);
		if (incomplete) {
			for (let i = pageOrder.indexOf(incomplete) - 1; i > 0; i--) {
				if (session[pageOrder[i]] !== undefined) {
					this.setState({page:i+1});
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