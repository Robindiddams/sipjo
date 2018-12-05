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
						The survey is now complete. You can click home. Or just close the window.
					</Text>
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