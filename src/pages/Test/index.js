import React, { Component } from 'react';
import {
	Text,
} from './components';
import Consent from  '../Consent';
import Demographic from  '../Demographic';
import {
	Page,
	Title,
} from '../../components/General';


export default class Test extends Component {
	state = {
		page: 0,
	}

	render() {
		switch (this.state.page) {
			case 0:
				return (
					<Consent
						nextPage={() => {
							this.setState({page: 1});
						}}
					/>
				);
			case 1:
				return (
					<Demographic
						nextPage={() => {
							this.setState({page: 2});
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
							<Text/>
						</Page>
					</React.Fragment>
				);
		}
	}
}