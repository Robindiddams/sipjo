import React, { Component } from 'react';
import {
	Page,
	Loading as Spinner,
} from '../../components/General';

export default class Loading extends Component {
	render() {
		return (
			<React.Fragment>
				<Page>
					<Spinner/>
				</Page>
			</React.Fragment>
		);
	}
}